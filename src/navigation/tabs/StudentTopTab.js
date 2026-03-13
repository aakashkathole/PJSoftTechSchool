import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MatIcon from '@react-native-vector-icons/material-design-icons';

// Screens
import StudentDashboard from '@screens/student/StudentDashboard';
import StudentAttendance from '@screens/student/StudentAttendance';
import StudentAssignments from '@screens/student/StudentAssignments';
import StudentTimeTable from '@screens/student/StudentTimeTable';
import StudentProfile from '@screens/student/StudentProfile';

const Tab = createMaterialTopTabNavigator();

const tabs = [
  {
    name: 'Home',
    activeIcon: 'home',
    inactiveIcon: 'home-outline',
  },
  {
    name: 'Attendance',
    activeIcon: 'calendar-check',
    inactiveIcon: 'calendar-check-outline',
  },
  {
    name: 'Assignments',
    activeIcon: 'clipboard-text',
    inactiveIcon: 'clipboard-text-outline',
  },
  {
    name: 'TimeTable',
    activeIcon: 'timetable',
    inactiveIcon: 'timetable',
  },
  {
    name: 'Profile',
    activeIcon: 'account-circle',
    inactiveIcon: 'account-circle-outline',
  },
];

const CustomTabBar = ({state, navigation}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const tab = tabs.find(t => t.name === route.name);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
            activeOpacity={0.7}>
            <View style={[styles.iconWrapper, isFocused && styles.iconWrapperActive]}>
              <MatIcon
                name={isFocused ? tab.activeIcon : tab.inactiveIcon}
                size={26}
                color={isFocused ? '#34a853' : '#8e8e8e'}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderTopColor: '#7b68ee',
    height: 56,
    elevation: 0,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    padding: 6,
    borderRadius: 18,
  },
  iconWrapperActive: {
    backgroundColor: '#e6f4ea',
  },
});

export default function StudentTopTab() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        swipeEnabled: true,
        animationEnabled: true,
      }}>
      <Tab.Screen name="Home" component={StudentDashboard} />
      <Tab.Screen name="Attendance" component={StudentAttendance} />
      <Tab.Screen name="Assignments" component={StudentAssignments} />
      <Tab.Screen name="TimeTable" component={StudentTimeTable} />
      <Tab.Screen name="Profile" component={StudentProfile} />
    </Tab.Navigator>
  );
}