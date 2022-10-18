import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import stylesConstant from '../../themes/stylesConstant';
import {COLORS, FONTS, SIZES} from '../../themes';
import Icon from 'react-native-vector-icons/Entypo';
import {CustomButton, Header, Separator} from '../../components';

const DetailScreen = () => {
  const [done, setDone] = useState(false)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Header title="Detail Delivery" showIcon={true}/>

        <View style={{marginHorizontal: SIZES.padding3}}>
          {/* Card 1 */}
          <View
            style={[
              stylesConstant.card,
              {
                backgroundColor: '#f8f8fa',
                marginVertical: SIZES.padding3,
                padding: SIZES.radius2,
              },
            ]}>
            <View style={styles.cardDelivery}>
              <Icon
                name="trash"
                color="#F55951"
                size={SIZES.radius2}
                style={{marginTop: 2}}
              />
              <View
                style={{
                  // backgroundColor: 'yellow',
                  marginLeft: SIZES.radius1,
                  alignItems: 'flex-start',
                }}>
                <Text style={styles.titleCard}>Infomasi Penjemputan</Text>
                <Text style={[styles.detailCard, {fontWeight: 'bold'}]}>
                  Herlan Nurachman
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '73%',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.detailCard}>Botol</Text>
                  <Text style={styles.detailCard}>10 Pcs</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '73%',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.detailCard}>Plastik</Text>
                  <Text style={styles.detailCard}>3 Kg</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '73%',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.detailCard}>TV</Text>
                  <Text style={styles.detailCard}>1 Pcs</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '73%',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={[styles.detailCard, {fontWeight: 'bold'}]}>
                    Total Harga
                  </Text>
                  <Text style={[styles.detailCard, {fontWeight: 'bold'}]}>
                    Rp. 90.000
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Card 2 */}
          <View
            style={[
              stylesConstant.card,
              {
                backgroundColor: '#f8f8fa',
                marginBottom: SIZES.padding3,
                padding: SIZES.radius2,
              },
            ]}>
            <View style={styles.cardDelivery}>
              <Icon
                name="location"
                color="#F55951"
                size={SIZES.radius2}
                style={{marginTop: 2}}
              />
              <View
                style={{
                  // backgroundColor: 'yellow',
                  marginLeft: SIZES.radius1,
                  alignItems: 'flex-start',
                }}>
                <Text style={styles.titleCard}>Alamat Penjemputan</Text>
                <Text style={[styles.detailCard]}>
                  Jalan Papandayan Timur No.2 Komplek Ciuyah Regency, Desa Asin,
                  Kota Cimahi, Jawa Barat
                </Text>
              </View>
            </View>
          </View>

          {/* Card 3 */}
          <View
            style={[
              stylesConstant.card,
              {
                backgroundColor: '#f8f8fa',
                marginBottom: SIZES.padding3,
                padding: SIZES.radius2,
              },
            ]}>
            <View style={styles.cardDelivery}>
              <Icon
                name="map"
                color="#F55951"
                size={SIZES.radius2}
                style={{marginTop: 2}}
              />
              <View
                style={{
                  // backgroundColor: 'yellow',
                  marginLeft: SIZES.radius1,
                  alignItems: 'flex-start',
                }}>
                <Text style={styles.titleCard}>Status Penjemputan</Text>
                <View style={{marginVertical: 5}}>
                  <Text
                    style={[
                      styles.detailCard,
                      {fontWeight: 'bold', color: COLORS.primary},
                    ]}>
                    Courier menuju dropbox tujuan
                  </Text>
                  <Text style={{...FONTS.bodySmallMedium}}>
                    26-09-2022 13:00
                  </Text>
                  <Separator />
                </View>
                <View style={{marginVertical: 5}}>
                  <Text style={[styles.detailCard]}>
                    Courier telah membawa sampah
                  </Text>
                  <Text style={{...FONTS.bodySmallMedium}}>
                    26-09-2022 12:30
                  </Text>
                  <Separator />
                </View>
                <View style={{marginVertical: 5}}>
                  <Text style={[styles.detailCard]}>
                    Courier menuju tempat pemjemputan
                  </Text>
                  <Text style={{...FONTS.bodySmallMedium}}>
                    26-09-2022 12:00
                  </Text>
                  <Separator />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <CustomButton
        title={done === false ? "Ubah Status" : "Selesai"}
        buttonStyle={{marginBottom: SIZES.padding5, marginHorizontal: SIZES.padding3}}
        enabled={done}
        onPress={() => done === false ? setDone(true) : setDone(false)}
      />
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
    paddingTop: SIZES.padding4,
  },
  cardDelivery: {
    flexDirection: 'row',
    // alignItems: 'center'
  },
  titleCard: {
    ...FONTS.bodyNormalBold,
    color: COLORS.black,
    textAlign: 'center',
  },
});
