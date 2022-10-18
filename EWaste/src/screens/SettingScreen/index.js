import { ScrollView, View } from 'react-native';
import React from 'react';
import stylesConstant from '../../themes/stylesConstant';
import { Header, TabMenu } from '../../components';
import { SIZES } from '../../themes';

const SettingScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={stylesConstant.container}>
      <Header title="Pengaturan" showIcon={true} />
      <View style={{ marginTop: SIZES.radius1 }}>
        <TabMenu
          titleMenu="Ubah Profile"
          iconName="profile"
          onPress={() => navigation.navigate('UpdateProfile')}
        />
        <TabMenu
          titleMenu="Ubah Password"
          iconName="lock"
          onPress={() => navigation.navigate('ChangePassword')}
        />
      </View>
    </ScrollView>
  );
};

export default SettingScreen;
