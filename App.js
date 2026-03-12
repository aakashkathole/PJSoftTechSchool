import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from '@navigation/index';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigator />
      <Toast />
    </SafeAreaProvider>
  );
};

export default App;