import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import stylesConstant from '../../themes/stylesConstant';
import {Header, Input, InputText, TabMenu} from '../../components';

const SettingScreen = ({navigation}) => {

  return (
    <ScrollView contentContainerStyle={stylesConstant.container}>
      <Header title="Pengaturan" showIcon={false}/>
      <TabMenu titleMenu="Ubah Profile" iconName="profile"/>
      <TabMenu titleMenu="Ubah Password" iconName="lock" onPress={() => navigation.navigate('ChangePassword')}/>
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
