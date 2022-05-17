  
import {addDays, format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';

type Item = {
  name: string;
  cookies: boolean;
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const Schedule: React.FC = () => {
  const [items, setItems] = useState<{[key: string]: Post[]}>({});

  useEffect(() => {
    // run once

    const getData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data: Post[] = await response.json();

      const mappedData = data.map((post, index) => {
        const date = addDays(new Date(), index);

        return {
          ...post,
          date: format(date, 'yyyy-MM-dd'),
        };
      });

      const reduced = mappedData.reduce(
        (acc: {[key: string]: Post[]}, currentItem) => {
          const {date, ...coolItem} = currentItem;

          acc[date] = [coolItem];

          return acc;
        },
        {},
      );

      setItems(reduced);
    };

    getData();
  }, []);

  const renderItem = (item: Item) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Agenda items={items} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    agendaDayTextColor: 'yellow',
    agendaDayNumColor: 'green',
    agendaTodayColor: 'red',
    agendaKnobColor: 'blue',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Schedule;