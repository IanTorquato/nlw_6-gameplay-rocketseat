import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { theme } from '@global/styles/theme';

import { Home } from '@screens/Home';
import { SignIn } from '@screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function PrivateRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.secondary100 } }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
