import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen, PasswordScreen} from '../Screens/Auth';
import WebViewScreen from '../Screens/WebViewScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '',
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
