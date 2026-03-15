import React from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import MatIcon from '@react-native-vector-icons/material-design-icons';
import useAuthStore from '@store/authStore';

// Navigators & Screens
import TeacherTopTab from '@navigation/tabs/TeacherTopTab';
import TeacherResult from '@screens/teacher/TeacherResult';
import TeacherAccount from '@screens/teacher/TeacherAccount';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const {logout, user} = useAuthStore();

  const userName = user?.name || 'Teacher';
  const userRole = user?.role || 'Teacher';
  const userId = user?.id || '';
  const branchCode = user?.branchCode || '';

  // Get initials from name
  const getInitials = name => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const handleLogout = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Sign Out', style: 'destructive', onPress: () => logout()},
    ]);
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1}}
      showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        {/* Avatar with initials */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{getInitials(userName)}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <View style={styles.pillRow}>
            <View style={styles.rolePill}>
              <Text style={styles.pillText}>{userRole}</Text>
            </View>
            <View style={styles.rolePill}>
              <Text style={styles.pillText}>{branchCode}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Section Label */}
      <View style={styles.sectionLabel}>
        <Text style={styles.sectionLabelText}>MENU</Text>
      </View>

      {/* Nav Items */}
      <View style={styles.drawerList}>
        <DrawerItemList {...props} />
      </View>

      {/* Footer Logout */}
      <View style={styles.footer}>
        <View style={styles.footerDivider} />
        <TouchableOpacity
          style={styles.logoutRow}
          onPress={handleLogout}
          activeOpacity={0.7}>
          <View style={styles.logoutIconBox}>
            <MatIcon name="logout-variant" color="#e53935" size={20} />
          </View>
          <Text style={styles.logoutLabel}>Sign Out</Text>
          <MatIcon name="chevron-right" color="#e53935" size={18} />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default function TeacherDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#e6f4ea',
        drawerActiveTintColor: '#34a853',
        drawerInactiveTintColor: '#5f6368',
        drawerItemStyle: {
          borderRadius: 12,
          marginHorizontal: 10,
          marginVertical: 1,
          height: 48,
          justifyContent: 'center',
        },
        drawerLabelStyle: {
          fontFamily: 'Poppins-Medium',
          fontSize: 14,
          marginLeft: 4,
          letterSpacing: 0.1,
        },
      }}>

      {/* Main Tabs */}
      <Drawer.Screen
        name="MainTabs"
        component={TeacherTopTab}
        options={{
          title: 'Home',
          drawerIcon: ({color}) => (
            <MatIcon name="home-outline" color={color} size={22} />
          ),
        }}
      />

      {/* Result */}
      <Drawer.Screen
        name="TeacherResult"
        component={TeacherResult}
        options={{
          title: 'Result',
          drawerIcon: ({color}) => (
            <MatIcon name="chart-bar" color={color} size={22} />
          ),
        }}
      />

      {/* Fees */}
      <Drawer.Screen
        name="TeacherAccount"
        component={TeacherAccount}
        options={{
          title: 'Account',
          drawerIcon: ({color}) => (
            <MatIcon name="account-cog-outline" color={color} size={22} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 18,
    gap: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#34a853',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#34a853',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#ffffff',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1a1a2e',
    letterSpacing: 0.2,
  },
  pillRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  rolePill: {
    marginTop: 4,
    backgroundColor: '#e6f4ea',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  pillText: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#34a853',
    letterSpacing: 0.3,
  },
  // Section Label
  sectionLabel: {
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 4,
  },
  sectionLabelText: {
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
    color: '#aaa',
    letterSpacing: 1.5,
  },
  // Drawer List
  drawerList: {
    flex: 1,
    paddingTop: 4,
  },
  // Footer
  footer: {
    paddingBottom: 16,
  },
  footerDivider: {
    height: 1,
    backgroundColor: '#e53935',
    marginHorizontal: 20,
    marginBottom: 8,
  },
  logoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 12,
  },
  logoutIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#fdecea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutLabel: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#e53935',
    letterSpacing: 0.1,
  },
});