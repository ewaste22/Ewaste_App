import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CustomButton, Header, Input} from '../../components';
import stylesConstant from '../../themes/stylesConstant';
import {SIZES} from '../../themes';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordUser } from '../../redux/Actions/Patch/ChangePassAction';

const ChangePassword = () => {
  const dispatch = useDispatch();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const userId = useSelector((state) => state.login.userData.id);
  const userToken = useSelector((state) => state.login.userData.token);

  const sendData = () => {  
      data = {
        oldPassword: oldPassword,
        newPassword: newPassword
      }
      console.log(data);
      dispatch(changePasswordUser(userId, data, userToken))
  }

  return (
    <ScrollView contentContainerStyle={stylesConstant.container}>
      <Header title="Ubah Password" showIcon={true} />
      <View
        style={{marginHorizontal: SIZES.padding3, marginTop: SIZES.padding5}}>
        <Input
          titleInput="Old Password"
          name="password"
          placeholder="Old Password"
          onChangeText={text => setOldPassword(text)}
          value={oldPassword}
          keyboardType="password"
          secureTextEntry={true}
        />
        <Input
          titleInput="New Password"
          name="password"
          placeholder="New Password"
          onChangeText={text => setNewPassword(text)}
          value={newPassword}
          keyboardType="password"
          secureTextEntry={true}
          inputStyle={{marginVertical: SIZES.radius1, }}
        />

        <CustomButton onPress={() => sendData()} title="Ubah Password" enabled={oldPassword === "" || newPassword === ""}/>
      </View>
    </ScrollView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
