import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../themes'
import stylesConstant from '../../../themes/stylesConstant'
import { Label } from '../../Atoms'

const CardOrder = ({customerName, wasteKilo, Price, onPress}) => {
  return (
    <TouchableOpacity style={[stylesConstant.card, { padding: SIZES.radius2 }]} onPress={onPress}>
            {/* <Label title="Sepeda Motor" size="big" /> */}

          <View style={[stylesConstant.spaceBeetween, { marginTop: 10 }]}>
            <Text style={{ ...FONTS.bodyLargeBold, color: COLORS.black }}>Herlan Nurachman</Text>
            {/* <Text style={{ ...FONTS.bodySmallBold }}>Rp 2000/kg</Text> */}
          </View>
          <View style={[stylesConstant.spaceBeetween, { marginTop: 5 }]}>
            <Text style={{ ...FONTS.bodyNormalBold }}>Berat Sampah</Text>
            <Text style={{ ...FONTS.bodyNormalBold }}>6 kg</Text>
          </View>
          <View style={[stylesConstant.spaceBeetween, { marginTop: 5 }]}>
            <Text style={{ ...FONTS.bodyNormalBold }}>Angkutan</Text>
            <Text style={{ ...FONTS.bodyNormalBold }}>Sepeda Motor</Text>
          </View>

        </TouchableOpacity>
  )
}

export default CardOrder

const styles = StyleSheet.create({})