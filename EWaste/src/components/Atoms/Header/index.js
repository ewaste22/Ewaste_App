import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {COLORS, SIZES, FONTS} from '../../../themes';
import GoBackIcon from '../GoBackIcon';

const Header = ({title}) => {
  return (
    <View
      style={{
        height: 52,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <GoBackIcon iconColor={COLORS.white} size={SIZES.icon} />
      <Text style={[FONTS.titleNormalBold, { color: COLORS.black, fontWeight: 'bold' }]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
