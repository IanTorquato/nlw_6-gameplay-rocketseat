import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { SignIn } from '@screens/SignIn';

export default function App() {
  return (
    <>
      <SignIn />
      <StatusBar style="inverted" translucent />
    </>
  );
}
