import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens — we will add as we build
import TeacherDashboard from '@screens/teacher/TeacherDashboard';

const Stack = createNativeStackNavigator();

const TeacherNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />
    </Stack.Navigator>
  );
};

export default TeacherNavigator;