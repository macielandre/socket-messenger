import React from 'react'
import { Login } from './src/pages/login'
import { Register } from './src/pages/register'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator initalRouteName={'Login'}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login to your account'}}
        />
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export { App }