// App.tsx
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { AppNavigator } from './src/AppNavigator';

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
