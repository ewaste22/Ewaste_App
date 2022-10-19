import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../themes';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react-native';

const SplashScreen = ({ navigation }) => {
  const login = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    setTimeout(() => {
      !login ? navigation.replace('Login') : navigation.replace('MainApp');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Lottie source={require('../../assets/images/splash.json')} autoPlay loop />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center'
  }
})