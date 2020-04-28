import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// src
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AuthLoadingScreen from '../Screens/AuthLoadingScreen';

const Stack = createStackNavigator();

const AppNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AuthLoadingScreen">
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
