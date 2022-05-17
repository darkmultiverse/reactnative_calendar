import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "ScheduleTest"}]
    })
  }
 
  return (
    <View style={styles.container}>
      <Text h3>Entre no Sistema</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope-square' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        />
      <Input
        placeholder="Senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        />
      <Button
        icon={
          <Icon
            name="arrow-right"
            size={20}
            color="white"
          />
        }
        title="Entrar"
        onPress={() => entrar()}
      />
    </View>
  );
}