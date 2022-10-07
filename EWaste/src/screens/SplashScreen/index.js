import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const SplashScreen = ({navigation}) => {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})