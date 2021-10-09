import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { BlackButton, BlueButton, GreenButton, RedButton, YellowButton } from '../../assets';
import { ButtonPrimary, Gap, Header } from '../../component';

const FormPemesanan = () => {
  
  
  return (
    <>
    <View style={styles.container}>
       <Header/>
       <ScrollView>
       <View style={styles.text}>
         <Text style={styles.texts}>Silahkan Klik Tombol Di Bawah Ini Sesuai Nomor Urut Calon</Text>
         <Gap height={35} />
         <View style={styles.wrapbtn}>
         <View style={styles.btnview}>
        <Text style={styles.textbtntop}>1</Text>
        <TouchableOpacity>
        <Image source={RedButton} style={styles.btn} />
          </TouchableOpacity>
        
        <Text style={styles.textbtn}>Calon No. 1</Text>
           </View>
           <View style={styles.btnview}>
        <Text style={styles.textbtntop}>1</Text>
        <TouchableOpacity>
        <Image source={GreenButton} style={styles.btn} />
          </TouchableOpacity>
        <Text style={styles.textbtn}>Calon No. 2</Text>
           </View>
           </View>
           <View style={styles.wrapbtn}>
         <View style={styles.btnview}>
        <Text style={styles.textbtntop}>1</Text>
        <TouchableOpacity>
        <Image source={BlueButton} style={styles.btn} />
          </TouchableOpacity>
        <Text style={styles.textbtn}>Calon No. 3</Text>
           </View>
           <View style={styles.btnview}>
        <Text style={styles.textbtntop}>1</Text>
        <TouchableOpacity>
        <Image source={YellowButton} style={styles.btn} />
          </TouchableOpacity>
        <Text style={styles.textbtn}>Calon No. 4</Text>
           </View>
           </View>
           <View style={styles.wrapbtncenter}>
         <View style={styles.btnview}>
        <Text style={styles.textbtntop}>1</Text>
        <TouchableOpacity>
        <Image source={BlackButton} style={styles.btn} />
          </TouchableOpacity>
        <Text style={styles.textbtn}>Tidak Sah</Text>
           </View>
           </View>
           <Gap height={25} />
           <ButtonPrimary text="Selesai" />
           </View>
         </ScrollView>
     
      
     
 
    </View>
    </>
  );
};


export default FormPemesanan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#93573D',
    fontSize: 18,
  },
  content: {
    paddingHorizontal: 20,
  },
  orderan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jml: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    flex: 1,
    marginTop: 15
  },
  texts: {
    textAlign: 'center'
  },
  btn: {
    width: 150,
    height: 150
  },
  btnview: {
    paddingLeft: 25,
  },
  textbtn: {
    paddingLeft: 35,
    fontFamily: 'Poppins-Medium',
    marginTop: 10
  },
  textbtntop: {
    paddingLeft: 65,
    fontFamily: 'Poppins-Medium',
    fontSize: 25
  },
  wrapbtn: {
    flexDirection: 'row'
  },
  wrapbtncenter: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
