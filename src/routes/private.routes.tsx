import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Home } from '@screens/Home';
import { SignIn } from '@screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function PrivateRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent' } }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
