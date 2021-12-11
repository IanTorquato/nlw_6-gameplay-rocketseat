import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { PrivateRoutes } from './private.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <PrivateRoutes />
    </NavigationContainer>
  );
}
