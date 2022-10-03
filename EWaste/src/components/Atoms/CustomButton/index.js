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
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        ...buttonStyle
      }}
      enabled={enabled}
      onPress={onPress}>
      <Text style={{ color: COLORS.white, ...FONTS.h3, fontWeight: 'bold', textTransform: 'uppercase' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
