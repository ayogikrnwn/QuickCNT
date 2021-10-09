import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Barcode} from '../../assets';
import {ButtonPrimary, Gap, Header} from '../../component';
import { getData } from '../../utils';

const DetailPesanan = ({navigation, userProfile}) => {
    const [profile, setProfile] = useState(userProfile);

    useEffect(() => {
        getData("user").then((res) => {
          setProfile(res);
        });
      }, [userProfile]);


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Yeay! Pemesanan Berhasil</Text>
        <View style={styles.nama}>
        <Text style={styles.descone}>Terima Kasih, Kak</Text>
        <Gap width={5} />
        <Text style={styles.descone}>{profile?.nama}</Text>
        </View>
        
        <Gap height={20} />
        <Text style={styles.title}>Pesananmu</Text>
        <View style={styles.orderan}>
          <View style={styles.ordername}>
            <Text>{profile?.pesanan1}</Text>
            <Text>{profile?.jmlpesanan1}</Text>
          </View>
          <View style={styles.ordername}>
          <Text>{profile?.pesanan2}</Text>
            <Text>{profile?.jmlpesanan2}</Text>
          </View>
          <View style={styles.ordername}>
          <Text>{profile?.pesanan3}</Text>
            <Text>{profile?.jmlpesanan3}</Text>
          </View>
          <View style={styles.ordername}>
          <Text>{profile?.pesanan4}</Text>
            <Text>{profile?.jmlpesanan4}</Text>
          </View>
        </View>
        <Gap height={50} />
        <View style={{ alignItems: 'center'}}>
        <Image source={Barcode} />
        </View>
        <Gap height={50} />
        <ButtonPrimary text="Pesan Lagi" onPress={()=> navigation.navigate('FormPemesanan')} />
      </View>
    </View>
  );
};

export default DetailPesanan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  nama: {
flexDirection: 'row',
justifyContent: 'center'
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#93573D',
    fontSize: 18,
    textAlign: 'center',
  },
  descone: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  orderan: {
   
  
  },
  ordername: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  
});
