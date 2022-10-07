import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { COLORS } from '../../themes';

const SplashScreen = ({navigation}) => {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
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