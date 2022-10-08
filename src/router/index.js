import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, Login, Register, SplashScreen } from '../screens';
import { BottomNavigation } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Tab.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='MainApp'>
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router