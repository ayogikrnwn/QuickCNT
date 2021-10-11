import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  keyboardType,
  hint,
  multiline = false,
}) => {
  const [border, setBorder] = useState('white');
  const onFocusForm = () => {
    setBorder('white');
  };
  const onBlurForm = () => {
    setBorder('white');
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        placeholder={hint}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        multiline={multiline}
      />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: '#C6BDBD',
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 12,
    color: '#000',
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});
