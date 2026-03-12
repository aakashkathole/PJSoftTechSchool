import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens — we will add as we build
import StudentDashboard from '@screens/student/StudentDashboard';

const Stack = createNativeStackNavigator();

const StudentNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
    </Stack.Navigator>
  );
};

export default StudentNavigator;