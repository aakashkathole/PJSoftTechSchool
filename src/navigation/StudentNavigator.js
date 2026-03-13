import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentTopTab from '@navigation/tabs/StudentTopTab';

const Stack = createNativeStackNavigator();

const StudentNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StudentTopTab" component={StudentTopTab} />
    </Stack.Navigator>
  );
};

export default StudentNavigator;