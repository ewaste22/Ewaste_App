import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'

const Separator = () => {
  return (
    <View style={{ backgroundColor: COLORS.lightGray2, height: 1 }} />
  )
}

export default Separator

const styles = StyleSheet.create({})