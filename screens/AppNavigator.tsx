import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './WelcomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
