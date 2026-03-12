import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import useAuthStore from '@store/authStore';

const SplashScreen = ({navigation}) => {
  const {initAuth, isAuthenticated, role} = useAuthStore();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    await initAuth();
  };

  useEffect(() => {
    if (!isAuthenticated) {
      // go to role select
      setTimeout(() => {
        navigation.replace('RoleSelect');
      }, 2000);
    }
  }, [isAuthenticated]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a73e8" />
      <Text style={styles.appName}>PJSoftTech</Text>
      <Text style={styles.tagline}>Smart School Management</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a73e8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 36,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
  },
  tagline: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
    fontFamily: 'Poppins-Regular',
    marginTop: 8,
  },
});

export default SplashScreen;