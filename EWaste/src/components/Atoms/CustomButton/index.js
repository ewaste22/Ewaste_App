import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({title, enabled, onPress, type, size, buttonStyle}) => {
  return (
    <TouchableOpacity
      style={{
        height: size === 'small' ? 36 : 48,
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: size === 'small' ? 6 : 10,
        backgroundColor: 'green',
        borderRadius: 15,
        ...buttonStyle
      }}
      enabled={enabled}
      onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
