import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentDrawer from '@navigation/StudentDrawer';

const Stack = createNativeStackNavigator();

const StudentNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StudentDrawer" component={StudentDrawer} />
    </Stack.Navigator>
  );
};

export default StudentNavigator;