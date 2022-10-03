import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {COLORS, FONTS, RADIUS, SIZES} from '../../themes';
import stylesConstant from '../../themes/stylesConstant';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import {MiniMap} from '../../assets';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Delivery" />
      <View style={{marginHorizontal: SIZES.padding3}}>
        <View
          style={[
            stylesConstant.card,
            {
              backgroundColor: '#f8f8fa',
              marginVertical: SIZES.padding3,
              padding: SIZES.radius2,
            },
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, paddingTop: SIZES.base}}>
              <Text style={styles.titleCard}>Asep Brimstone</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <View style={{alignItems: 'center'}}>
                <Icon name="clock" color={COLORS.primary} size={SIZES.h1} />
                <Text style={{color: COLORS.primary, ...FONTS.bodySmallMedium}}>
                  Online
                </Text>
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
                <Icon2
                  name="location"
                  color="#F55951"
                  size={SIZES.radius2}
                />
                <Text
                  style={{...FONTS.bodySmallBold, marginLeft: SIZES.padding1}}>
                  Gg. Hj Ridho No.17
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Orderan */}
        <Text style={[FONTS.titleLargeBold, { color: COLORS.black, marginTop: SIZES.radius1, marginBottom: SIZES.base, fontWeight: 'bold' }]}>Orderan Baru</Text>
        <View style={[stylesConstant.card, {flexDirection: 'row'}]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqY3OcOCZTwFEHGe3bqliCS86V7nbs3onlItrdujI&s',
            }}
            style={{width: 60, height: 60, borderRadius: RADIUS.small, flex: 1}}
          />
          <View style={{paddingLeft: SIZES.radius1, flex: 2}}>
            <Text
              style={{
                ...FONTS.bodyLargeMedium,
                color: COLORS.black,
                marginTop: 4,
              }}>
              Botol Kecap
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, marginTop: SIZES.base}}>
              Jumlah: 10 Botol
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text style={{ ...FONTS.bodyNormalBold, textDecorationLine: "underline", color: "#F55951" }}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[stylesConstant.card, {flexDirection: 'row'}]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqY3OcOCZTwFEHGe3bqliCS86V7nbs3onlItrdujI&s',
            }}
            style={{width: 60, height: 60, borderRadius: RADIUS.small, flex: 1}}
          />
          <View style={{paddingLeft: SIZES.radius1, flex: 2}}>
            <Text
              style={{
                ...FONTS.bodyLargeMedium,
                color: COLORS.black,
                marginTop: 4,
              }}>
              Botol Kecap
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, marginTop: SIZES.base}}>
              Jumlah: 10 Botol
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text style={{ ...FONTS.bodyNormalBold, textDecorationLine: "underline", color: "#F55951" }}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[stylesConstant.card, {flexDirection: 'row'}]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqY3OcOCZTwFEHGe3bqliCS86V7nbs3onlItrdujI&s',
            }}
            style={{width: 60, height: 60, borderRadius: RADIUS.small, flex: 1}}
          />
          <View style={{paddingLeft: SIZES.radius1, flex: 2}}>
            <Text
              style={{
                ...FONTS.bodyLargeMedium,
                color: COLORS.black,
                marginTop: 4,
              }}>
              Botol Kecap
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, marginTop: SIZES.base}}>
              Jumlah: 10 Botol
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text style={{ ...FONTS.bodyNormalBold, textDecorationLine: "underline", color: "#F55951" }}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[stylesConstant.card, {flexDirection: 'row'}]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqY3OcOCZTwFEHGe3bqliCS86V7nbs3onlItrdujI&s',
            }}
            style={{width: 60, height: 60, borderRadius: RADIUS.small, flex: 1}}
          />
          <View style={{paddingLeft: SIZES.radius1, flex: 2}}>
            <Text
              style={{
                ...FONTS.bodyLargeMedium,
                color: COLORS.black,
                marginTop: 4,
              }}>
              Botol Kecap
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, marginTop: SIZES.base}}>
              Jumlah: 10 Botol
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text style={{ ...FONTS.bodyNormalBold, textDecorationLine: "underline", color: "#F55951" }}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[stylesConstant.card, {flexDirection: 'row'}]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqY3OcOCZTwFEHGe3bqliCS86V7nbs3onlItrdujI&s',
            }}
            style={{width: 60, height: 60, borderRadius: RADIUS.small, flex: 1}}
          />
          <View style={{paddingLeft: SIZES.radius1, flex: 2}}>
            <Text
              style={{
                ...FONTS.bodyLargeMedium,
                color: COLORS.black,
                marginTop: 4,
              }}>
              Botol Kecap
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, marginTop: SIZES.base}}>
              Jumlah: 10 Botol
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text style={{ ...FONTS.bodyNormalBold, textDecorationLine: "underline", color: "#F55951" }}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[stylesConstant.card, {flexDirection: 'row'}]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqY3OcOCZTwFEHGe3bqliCS86V7nbs3onlItrdujI&s',
            }}
            style={{width: 60, height: 60, borderRadius: RADIUS.small, flex: 1}}
          />
          <View style={{paddingLeft: SIZES.radius1, flex: 2}}>
            <Text
              style={{
                ...FONTS.bodyLargeMedium,
                color: COLORS.black,
                marginTop: 4,
              }}>
              Botol Kecap
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, marginTop: SIZES.base}}>
              Jumlah: 10 Botol
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text style={{ ...FONTS.bodyNormalBold, textDecorationLine: "underline", color: "#F55951" }}>Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[stylesConstant.card, {flexDirection: 'row'}]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqY3OcOCZTwFEHGe3bqliCS86V7nbs3onlItrdujI&s',
            }}
            style={{width: 60, height: 60, borderRadius: RADIUS.small, flex: 1}}
          />
          <View style={{paddingLeft: SIZES.radius1, flex: 2}}>
            <Text
              style={{
                ...FONTS.bodyLargeMedium,
                color: COLORS.black,
                marginTop: 4,
              }}>
              Botol Kecap
            </Text>
            <Text style={{...FONTS.bodyNormalMedium, marginTop: SIZES.base}}>
              Jumlah: 10 Botol
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text style={{ ...FONTS.bodyNormalBold, textDecorationLine: "underline", color: "#F55951" }}>Detail</Text>
            </TouchableOpacity>
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
