import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import AuthSwitcher from './src/utils/AuthSwitcher';

export default function App() {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <AuthSwitcher />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
