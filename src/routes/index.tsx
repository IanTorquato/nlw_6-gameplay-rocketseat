import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AuthProvider } from '@contexts/Auth';

import { PrivateRoutes } from './private.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PrivateRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
