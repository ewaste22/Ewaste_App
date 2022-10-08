import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, RADIUS, SIZES} from '../../../themes';

const Label = ({title, size}) => {
  return (
    <View style={styles.wrapper}>
      <Text
        style={{...FONTS.bodySmallBold, textAlign: 'center', color: COLORS.white}}
        numberOfLines={1}
        ellipsizeMode="tail">
        {title} Km
      </Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.primary,
    padding: SIZES.base,
    borderRadius: RADIUS.medium,
    width: 60,
  },
});
