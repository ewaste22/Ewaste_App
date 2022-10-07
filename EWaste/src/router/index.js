import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Akun, DetailScreen, HomeScreen, Login, Register, SplashScreen } from '../screens';
import {BottomNavigation} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return(
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Akun" component={Akun} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Router