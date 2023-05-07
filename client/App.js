import React from 'react'
import { Login } from './src/pages/login'
import { Register } from './src/pages/register'
import { Menu } from './src/pages/menu'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator initalRouteName={'Login'}>
        <Stack.Screen
          name="Menu"
          component={Menu}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="Register" 
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export { App }