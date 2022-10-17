import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '../../../themes';

const CustomButton = ({title, enabled, onPress, type, size, buttonStyle}) => {
  return (
    <TouchableOpacity
      style={{
        height: size === 'small' ? 36 : 48,
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: size === 'small' ? 6 : 10,
        backgroundColor: enabled === false ? COLORS.primary : COLORS.grey6,
        borderRadius: 15,
        ...buttonStyle
      }}
      disabled={enabled}
      onPress={onPress}>
      <Text style={{ color: COLORS.white, ...FONTS.h3, fontWeight: 'bold', textTransform: 'uppercase' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
