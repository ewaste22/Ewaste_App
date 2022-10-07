import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Header, Label} from '../../components';
import {COLORS, FONTS, RADIUS, SIZES} from '../../themes';
import stylesConstant from '../../themes/stylesConstant';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import {MiniMap} from '../../assets';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Header title="Delivery" /> */}
      <View style={{marginHorizontal: SIZES.padding3}}>
        <View
          style={[
            stylesConstant.card,
            {
              marginVertical: SIZES.padding3,
              padding: SIZES.radius2,
            },
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, paddingTop: SIZES.base}}>
              <Text style={{ ...FONTS.bodyNormalBold }}>Hallo,</Text>
              <Text style={styles.titleCard}>Asep Brimstone</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <View style={{alignItems: 'center'}}>
                <Image source={{ uri: "https://th.bing.com/th/id/R.34ac62561e4d2d3f73903371539bfb5b?rik=0oRU4BctwhzLIA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fportrait-profile-008.jpg&ehk=ZPTQOU194fjZ2VzGXGXzymsATv6%2fCUW4EFn3Ya53CZ4%3d&risl=&pid=ImgRaw&r=0" }} style={{ width: 35, height: 35, borderRadius: 12, marginTop: SIZES.base}}/>
              </View>
            </View>
          </View>
          <View
            style={{
              borderRadius: RADIUS.small,
              flexDirection: 'row',
              position: 'relative',
              backgroundColor: '#ffffff',
              marginTop: SIZES.padding2,
            }}>
            <Image source={MiniMap} style={{flex: 1}} />
            <View style={{flex: 1, padding: SIZES.base}}>
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
                  style={{...FONTS.bodySmallBold, marginLeft: SIZES.padding1}}>
                  Gg. Hj Ridho No.17
                </Text>
              </View>
            </View>
          </View>
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
          Orderan Baru
        </Text>
        <View style={[stylesConstant.card, {padding: SIZES.radius2}]}>
          <View style={stylesConstant.spaceBeetween}>
            <Label title={4}/>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailScreen')}>
              <Text
                style={{
                  ...FONTS.bodyNormalBold,
                  textDecorationLine: 'underline',
                  color: COLORS.black,
                }}>
                Detail
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 10}]}>
            <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.black }}>Herlan Nurachman</Text>
            <Text style={{ ...FONTS.bodySmallBold }}>Rp 2000/kg</Text>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 5}]}>
            <Text style={{ ...FONTS.bodyNormalBold }}>Berat</Text>
            <Text style={{ ...FONTS.bodyNormalBold }}>6 kg</Text>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 5}]}>
            <Text style={{ ...FONTS.bodyNormalBold }}>Harga</Text>
            <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.black }}>Rp. 12.000</Text>
          </View>
        </View>
        <View style={[stylesConstant.card, {padding: SIZES.radius2}]}>
          <View style={stylesConstant.spaceBeetween}>
            <Label title={5.7}/>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailScreen')}>
              <Text
                style={{
                  ...FONTS.bodyNormalBold,
                  textDecorationLine: 'underline',
                  color: COLORS.black,
                }}>
                Detail
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 10}]}>
            <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.black }}>Aji Nuansa</Text>
            <Text style={{ ...FONTS.bodySmallBold }}>Rp 2000/kg</Text>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 5}]}>
            <Text style={{ ...FONTS.bodyNormalBold }}>Berat</Text>
            <Text style={{ ...FONTS.bodyNormalBold}}>10 kg</Text>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 5}]}>
            <Text style={{ ...FONTS.bodyNormalBold }}>Harga</Text>
            <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.black }}>Rp. 20.000</Text>
          </View>
        </View>
        <View style={[stylesConstant.card, {padding: SIZES.radius2}]}>
          <View style={stylesConstant.spaceBeetween}>
            <Label title={5}/>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailScreen')}>
              <Text
                style={{
                  ...FONTS.bodyNormalBold,
                  textDecorationLine: 'underline',
                  color: COLORS.black,
                }}>
                Detail
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 10}]}>
            <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.black }}>Aldi Ageng</Text>
            <Text style={{ ...FONTS.bodySmallBold }}>Rp 2000/kg</Text>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 5}]}>
            <Text style={{ ...FONTS.bodyNormalBold }}>Berat</Text>
            <Text style={{ ...FONTS.bodyNormalBold }}>30 kg</Text>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 5}]}>
            <Text style={{ ...FONTS.bodyNormalBold }}>Harga</Text>
            <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.black }}>Rp. 60.000</Text>
          </View>
        </View>
        <View style={[stylesConstant.card, {padding: SIZES.radius2}]}>
          <View style={stylesConstant.spaceBeetween}>
            <Label title={3} />
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailScreen')}>
              <Text
                style={{
                  ...FONTS.bodyNormalBold,
                  textDecorationLine: 'underline',
                  color: COLORS.black,
                }}>
                Detail
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 10}]}>
            <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.black }}>Sahid Jafar</Text>
            <Text style={{ ...FONTS.bodySmallBold }}>Rp 2000/kg</Text>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 5}]}>
            <Text style={{ ...FONTS.bodyNormalBold }}>Berat</Text>
            <Text style={{ ...FONTS.bodyNormalBold }}>12 kg</Text>
          </View>
          <View style={[stylesConstant.spaceBeetween, {marginTop: 5}]}>
            <Text style={{ ...FONTS.bodyNormalBold }}>Harga</Text>
            <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.black }}>Rp. 24.000</Text>
          </View>
        </View>
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
