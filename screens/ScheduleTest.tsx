import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import {Agenda} from 'react-native-calendars';

type Item = {
    name: String;
    cookies: boolean;
}

const ScheduleTest: React.FC = () => {
    const [items, setItems] = useState<{[key: string]: Item[]}>({
        '2020-11-29': [{name: 'test1', cookies: true}],
        '2020-11-30': [{name: 'test2', cookies: false}],
    });

    const renderItem = (item: item) => {
        return (
            <View style={styles.itemContainer}>
              <Text>{item.name}</Text>
              <Text>{item.cookies ? `🍪` : `😋`}</Text>
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
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    },
});

export default ScheduleTest;      