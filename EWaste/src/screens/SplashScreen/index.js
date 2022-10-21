import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../themes';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react-native';
import { Ewaste, SplashBackground } from '../../assets/images';

const SplashScreen = ({ navigation }) => {
  const login = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    setTimeout(() => {
      !login ? navigation.replace('Login') : navigation.replace('MainApp');
    }, 3000);
  }, []);

  return (
    <ImageBackground source={SplashBackground} style={styles.container}>
      {/* <Lottie source={require('../../assets/images/courier.json')} autoPlay loop /> */}
      <Image source={Ewaste}/>
    </ImageBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.third,
    justifyContent: 'center',
    alignItems: 'center'
  }
})