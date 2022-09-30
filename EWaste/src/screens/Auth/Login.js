import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { CustomButton, InputText } from '../../components/';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/Actions/Push/Auth';

const Login = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const sendData = () => {
    // navigation.replace('Splash')
    dispatch(loginUser(email, password, navigation))
  }

  return (
    <ScrollView style={styles.container}>
      <Text>Login</Text>
      <Text style={styles.title}>Email</Text>
      <InputText 
        name="email"
        placeholder="Masukan Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        secureTextEntry={false}
      />
      <Text style={styles.title}>Password</Text>
      <InputText 
        name="password"
        placeholder="Masukan Password"
        onChangeText={text => setPassword(text)}
        value={password}
        keyboardType="password"
        secureTextEntry={true}
      />
      <CustomButton 
        onPress={() => sendData()}
        title="Login"
        buttonStyle={{ marginTop: 10 }}
      />
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  title: {
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',

  }
})