import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CustomButton, InputText} from '../../components/';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../redux/Actions/Push/Auth';
import {COLORS, FONTS, SIZES} from '../../themes';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const sendData = () => {
    navigation.replace('MainApp')
    // dispatch(loginUser(email, password, navigation));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          marginHorizontal: SIZES.padding3,
          marginTop: SIZES.padding5,
          flex: 1,
        }}>
        <Text style={styles.headerTitle}>Log In</Text>
        <View style={{ marginTop: SIZES.padding5 }}>
          <Text style={styles.title}>Email</Text>
          <InputText
            name="email"
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            secureTextEntry={false}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: SIZES.padding3 }]}>
          <Text style={styles.title}>Password</Text>
          <InputText
            name="password"
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            keyboardType="password"
            secureTextEntry={true}
          />
        </View>
        <CustomButton
          onPress={() => sendData()}
          title="Login"
          buttonStyle={{marginTop: SIZES.padding5 }}
        />
      </View>
      <View style={styles.goToRegister}>
          <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.secondary, marginRight: 5 }}>
            Belum punya akun?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={{ ...FONTS.bodyNormalBold, color: COLORS.primary }}>
              Register
            </Text>
          </TouchableOpacity>
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
    marginLeft: 3
  },
  headerTitle: {
    ...FONTS.headingLargeBold,
    marginVertical: SIZES.padding5,
    color: COLORS.black,
    fontWeight: 'bold',
    marginLeft: 3
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
