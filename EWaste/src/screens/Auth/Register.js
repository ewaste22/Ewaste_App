import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { CustomButton, InputText } from '../../components/';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/Actions/Push/Auth';
import { COLORS, FONTS, SIZES } from '../../themes';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // const sendData = () => {
  //   // navigation.replace('MainApp')
  //   dispatch(loginUser(email, password, navigation));
  // };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          marginHorizontal: SIZES.padding3,
          marginTop: SIZES.padding5,
          flex: 1,
        }}>
        <Text style={styles.headerTitle}>Sign Up</Text>

        <View style={{ marginTop: SIZES.padding3 }}>
          <Text style={styles.title}>Fullname</Text>
          <InputText
            name="Fullname"
            placeholder="Fullname"
          />
        </View>

        <View style={{ marginTop: SIZES.padding3 }}>
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

        <View style={{ marginTop: SIZES.padding3 }}>
          <Text style={styles.title}>Address</Text>
          <InputText
            name="Address"
            placeholder="Address"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>

        <View style={{ marginTop: SIZES.padding3 }}>
          <Text style={styles.title}>Phone Number</Text>
          <InputText
            name="Phone Number"
            placeholder="Phone Number"
            onChangeText={text => setEmail(text)}
            value={email}
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
        <TouchableOpacity style={{ marginVertical: SIZES.padding1, alignItems: 'flex-end', marginRight: SIZES.base }} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.secondary }}>Lupa Password</Text>
        </TouchableOpacity>
        <CustomButton
          onPress={() => sendData()}
          title="Sign Up"
          enabled={email === "" || password === ""}
        />
      </View>
      <View style={styles.goToRegister}>
        <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.secondary, marginRight: 5 }}>
          Sudah punya akun?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ ...FONTS.bodyNormalBold, color: COLORS.primary }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
    paddingTop: SIZES.padding1,
  },
  title: {
    ...FONTS.bodyNormalRegular,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 3,
    marginLeft: 3
  },
  headerTitle: {
    ...FONTS.headingLargeBold,
    marginVertical: SIZES.padding4,
    color: COLORS.black,
    fontWeight: 'bold',
    marginLeft: 3
    // textAlign: 'center',
  },
  goToRegister: {
    bottom: 5,
    paddingVertical: SIZES.padding4,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});
