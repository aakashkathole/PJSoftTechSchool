import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens — we will add as we build
import TeacherDashboard from '@navigation/TeacherDrawer';
import TeacherDrawer from './TeacherDrawer';

const Stack = createNativeStackNavigator();

const TeacherNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TeacherDrawer" component={TeacherDrawer} />
    </Stack.Navigator>
  );
};

export default TeacherNavigator;