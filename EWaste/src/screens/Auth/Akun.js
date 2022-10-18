import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { COLORS, FONTS, SIZES } from '../../themes';
import stylesConstant from '../../themes/stylesConstant';
import Entypo from 'react-native-vector-icons/Entypo';
import { TabMenu } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { akunUser, logout } from '../../redux/Actions';
import Auth from '../../services/Storage/Auth';

const Akun = ({ navigation }) => {

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.login.userData.id);
  const userToken = useSelector((state) => state.login.userData.token);
  const userAkun = useSelector((state) => state.akun.userAkun);

  const onLogout = () => {
    Auth.logout();
    dispatch(logout());
    navigation.replace('Splash');
  }

  useEffect(() => {
    console.log(userId, userToken);
    dispatch(akunUser(userToken));
  }, [])


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Header title="Akun Saya"/> */}
      <ImageBackground
        source={{
          uri: 'https://th.bing.com/th/id/R.63e302dc755a5a3fd9b9d8e0fc30172c?rik=sLasA69PFZjoTA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fJgCKjTD.jpg&ehk=hFL8vWeEdymWPOdYwMTitz%2bTX%2fZuJyyt215rgAxJVuk%3d&risl=&pid=ImgRaw&r=0',
        }}
        style={styles.headerWrapper}>
        <Image
          source={{
            uri: `${userAkun?.image_courier}`,
          }}
          style={styles.imgProfile}
        />
        <View style={{ paddingLeft: SIZES.radius1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="star" color={COLORS.secondary} size={SIZES.radius1} />
            <Entypo name="star" color={COLORS.secondary} size={SIZES.radius1} />
            <Entypo name="star" color={COLORS.secondary} size={SIZES.radius1} />
            <Entypo name="star" color={COLORS.secondary} size={SIZES.radius1} />
            <Entypo
              name="star-outlined"
              color={COLORS.secondary}
              size={SIZES.radius1}
            />
          </View>
          <Text
            style={{
              ...FONTS.titleNormalBold,
              color: COLORS.white,
              textTransform: 'uppercase',
            }}>
            {userAkun?.fullname_courier}
          </Text>
          <Text style={{ ...FONTS.bodyNormalMedium, color: COLORS.white }}>
            {userAkun?.nomor_courier}
          </Text>
        </View>
      </ImageBackground>
      <TabMenu titleMenu="Riwayat Penjemputan" iconName="carryout" />
      <TabMenu titleMenu="Pengaturan Akun" iconName="setting" onPress={() => navigation.navigate("SettingScreen")} />
      <TabMenu titleMenu="Pusat Bantuan" iconName="questioncircleo" />
      <TabMenu titleMenu="Customer Service" iconName="customerservice" />
      <TabMenu titleMenu="Logout" iconName="logout" onPress={() => onLogout()} />
    </ScrollView>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerWrapper: {
    padding: SIZES.padding3,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    height: 150,
    alignItems: 'center',
  },
  imgProfile: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginBottom: SIZES.base,
    marginTop: SIZES.base,
  },
  cardHeader: {
    ...stylesConstant.card,
    padding: SIZES.h3,
  },
});
