import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { InputText } from '../../Atoms';
import { COLORS, FONTS, SIZES } from '../../../themes';

const Input = ({titleInput, name, placeholder, onChangeText, value, keyboardType, secureTextEntry, inputStyle}) => {
  return (
    <View style={{...inputStyle}}>
      <Text style={styles.title}>{titleInput}</Text>
      <InputText
        name={name}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    ...FONTS.bodyNormalBold,
    color: COLORS.black,
    marginBottom: 5,
    marginLeft: 3
  }
});
