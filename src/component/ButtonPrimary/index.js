import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonPrimary = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textbtn}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0BCAD4',
    marginTop: 20,
    borderRadius: 10,

    height: 52,
  },
  textbtn: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 21,
    textAlign: 'center',
    alignContent: 'center',
    marginTop: 6,
    color: 'white',
  },
});
