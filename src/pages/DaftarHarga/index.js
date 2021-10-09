import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap, Harga, Header} from '../../component';

const DaftarHarga = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Harga />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('FormPemesanan')}>
        <Text style={styles.text}>Pesan Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DaftarHarga;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAE8D8',
    flex: 1,
  },
  content: {
    height: 431,
    backgroundColor: 'white',
    marginTop: -23,
    borderRadius: 20,
  },
  text: {
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      color: '#93573D'
  }
});
