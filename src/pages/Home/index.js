
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {FotoBoba, Logo} from '../../assets';
import {ButtonPrimary, Gap, Header, Input} from '../../component';
import CardHorizontal from '../../component/CardHorizontal';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
       
        <View style={styles.contentBottom}>
          <Text style={styles.pesan}> Masukan jumlah kehadiran pemilih </Text>
        </View>
        <View style={styles.btn}>
         <Input
          
           />
          <ButtonPrimary
            text="Mulai Penghitungan"
            onPress={() => navigation.navigate('FormPemesanan')}
          />
        </View>

      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  credit:{
    fontFamily: 'Poppins-Light',
    fontSize: 10,
    paddingLeft: 10
  },
  contentBottom: {
    paddingTop: 30,

   
  },
  pesan: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#93573D',
    textAlign: 'center',
   
  },
  btn: {
    paddingTop: -30,
    paddingLeft: 13,
    paddingRight: 13,
  },
});
