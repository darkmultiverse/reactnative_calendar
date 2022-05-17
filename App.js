import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/MainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Schedule from './screens/Schedule';
import ScheduleTest from './screens/ScheduleTest';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScheduleTest" component={ScheduleTest} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Schedule" component={Schedule} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}