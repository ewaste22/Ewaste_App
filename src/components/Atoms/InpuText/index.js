import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { COLORS } from '../../../themes';

const InputText = ({placeholder, multiline, style, type, maxLength, onChangeText, value, error, name, onBlur, secureTextEntry}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput 
        onFocus={() => setIsFocus(true)}
        onBlur={onBlur}
        multiline={multiline}
        onChangeText={onChangeText}
        value={value}
        name={name}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        keyboardType={type}
        placeholder={placeholder}
        // style={style.inputs}
      />
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
  container: {
      borderRadius: 15,
      backgroundColor: COLORS.grey8,
      justifyContent: 'flex-start',
      paddingHorizontal: 10,
      flexDirection: 'row',
  }
})