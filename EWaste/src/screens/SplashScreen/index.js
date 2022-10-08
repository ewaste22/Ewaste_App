import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { COLORS } from '../../themes';
import { useSelector } from 'react-redux';

const SplashScreen = ({navigation}) => {
  const login = useSelector((state) => state.login.isLogin);
  
  useEffect(() => {
    setTimeout(() => {
      !login ? navigation.replace('Login') :  navigation.replace('MainApp');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
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