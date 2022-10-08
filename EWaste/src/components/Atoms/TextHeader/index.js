import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../../themes'

const TextHeader = ({text}) => {
  return (
    <Text style={[FONTS.headingNormalBold, { color: COLORS.neutral5 }]}>{text}</Text>
  )
}

export default TextHeader

const styles = StyleSheet.create({})