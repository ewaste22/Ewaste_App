import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
// import { CustomButton, InputText } from '../../components/';
import {CustomButton, Header, Input} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../redux/Actions/Push/Auth';
import {COLORS, FONTS, SIZES} from '../../themes';
import Lottie from 'lottie-react-native';
import stylesConstant from '../../themes/stylesConstant';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const sendData = () => {
    // navigation.replace('MainApp')
    dispatch(loginUser(email, password, navigation));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{
          // marginVertical: SIZES.padding3,
          marginTop: SIZES.padding1,
          flex: 1,
          height: 200
        }}>
        <Lottie source={require('../../assets/images/courier.json')} autoPlay loop />
      </View>
      <View
        style={[{
          paddingHorizontal: SIZES.padding3,
          // marginTop: SIZES.padding3,
          flex: 1,
          // backgroundColor: COLORS.third
        }]}>
        <Text style={styles.headerTitle}>Log In</Text>
        <View style={{marginTop: SIZES.padding5}}>
          <Input
            titleInput="Email"
            name="email"
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            secureTextEntry={false}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: SIZES.padding3}]}>
          <Input
            titleInput="Password"
            name="password"
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            keyboardType="password"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={{
            marginVertical: SIZES.padding1,
            alignItems: 'flex-end',
            marginRight: SIZES.base,
          }}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{...FONTS.bodyNormalRegular, color: COLORS.secondary}}>
            Lupa Password?
          </Text>
        </TouchableOpacity>
        <CustomButton
          onPress={() => sendData()}
          title="Login"
          enabled={email === '' || password === ''}
        />
      </View>
      
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
    paddingTop: SIZES.padding4,
  },
  title: {
    ...FONTS.bodyNormalRegular,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 5,
    marginLeft: 3,
  },
  headerTitle: {
    ...FONTS.headingLargeBold,
    marginVertical: SIZES.padding2,
    color: COLORS.black,
    fontWeight: 'bold',
    marginLeft: 3,
    // textAlign: 'center',
  },
  goToRegister: {
    bottom: 0,
    paddingVertical: SIZES.padding4,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});
