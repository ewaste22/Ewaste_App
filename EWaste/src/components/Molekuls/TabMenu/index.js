import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../themes'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Separator } from '../../Atoms';

const TabMenu = ({titleMenu, iconName, onPress}) => {
  return (
    <View style={{backgroundColor: COLORS.white, paddingHorizontal: SIZES.padding3}}>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: SIZES.radius1 }} onPress={onPress}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <AntDesign name={iconName} color={COLORS.secondary} size={SIZES.h3} />
            <Text style={{ ...FONTS.bodyNormalMedium, marginLeft: SIZES.base }}>{titleMenu}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <AntDesign name="right" color={COLORS.lightGray} size={SIZES.h5} />
          </View>
        </TouchableOpacity>
        <Separator />
    </View>
  )
}

export default TabMenu

const styles = StyleSheet.create({})