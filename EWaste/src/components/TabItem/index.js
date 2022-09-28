import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { IconAddSaldo, IconAkun, IconAkunActive, IconHome, IconHomeActive, IconKarpet } from '../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
      if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHome />

      if(label === "Login") return isFocused ? <IconAkunActive/> : <IconAkun />
      return <IconHome />
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
      alignItems: 'center'
  },
  text: (isFocused) => ({
      fontSize: 13,
      color: isFocused ? "black" : "grey",
      marginTop: 8
  })
});