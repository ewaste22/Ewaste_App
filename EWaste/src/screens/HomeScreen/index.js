import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {CardOrder, Header, Label} from '../../components';
import {COLORS, FONTS, RADIUS, SIZES} from '../../themes';
import { useDispatch, useSelector } from 'react-redux';
import { akunUser } from '../../redux/Actions';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  
  const userToken = useSelector((state) => state.login.userData.token);
  const userAkun = useSelector((state) => state.akun?.userAkun);

  useEffect(() => {
    dispatch(akunUser(userToken));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Header title="Delivery" /> */}
      <View style={{marginHorizontal: SIZES.padding3}}>
        <View
          style={[
            // stylesConstant.card,
            {
              marginVertical: SIZES.padding3,
              // padding: SIZES.radius2,
            },
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, paddingTop: SIZES.base}}>
              <Text style={{...FONTS.bodyNormalBold}}>Hallo,</Text>
              <Text style={styles.titleCard}>{userAkun?.fullname_courier}</Text>
            </View>

            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={{
                    uri: `${userAkun?.image_courier}`,
                  }}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 12,
                    marginTop: SIZES.base,
                  }}
                />
              </View>
            </View>
          </View>

          {/* <View
            style={{
              borderRadius: RADIUS.small,
              flexDirection: 'row',
              position: 'relative',
              backgroundColor: '#ffffff',
              marginTop: SIZES.padding2,
            }}>
            <Image source={MiniMap} style={{ flex: 1 }} />
            <View style={{ flex: 1, padding: SIZES.base }}>
              <Text
                style={{
                  ...FONTS.bodyNormalMedium,
                  color: COLORS.black,
                  fontWeight: '600',
                }}
                numberOfLines={1}
                ellipsizeMode="tail">
                Kota Bandung, Jawa Barat
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: SIZES.radius1,
                }}>
                <Icon2 name="location" color={COLORS.secondary} size={SIZES.radius2} />
                <Text
                  style={{ ...FONTS.bodySmallBold, marginLeft: SIZES.padding1 }}>
                  Gg. Hj Ridho No.17
                </Text>
              </View>
            </View>
          </View> */}
        </View>

        {/* Orderan */}
        <Text
          style={[
            FONTS.titleLargeBold,
            {
              color: COLORS.black,
              marginTop: SIZES.radius1,
              marginBottom: SIZES.base,
              fontWeight: 'bold',
            },
          ]}>
          Sampah Belum Diangkut
        </Text>

        <CardOrder onPress={() => navigation.navigate('DetailScreen')} />
        <CardOrder onPress={() => navigation.navigate('DetailScreen')} />
        <CardOrder onPress={() => navigation.navigate('DetailScreen')} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  titleCard: {
    ...FONTS.bodyLargeBold,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});
