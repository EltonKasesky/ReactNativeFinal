import React, { useState } from 'react';
import { View } from 'react-native';
import Login from '../../screens/Login';
import Register from '../../screens/Register';

export default function AuthSwitcher() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      {isLogin ? (
        <Login onSwitch={() => setIsLogin(false)} />
      ) : (
        <Register onSwitch={() => setIsLogin(true)} />
      )}
    </View>
  );
}
