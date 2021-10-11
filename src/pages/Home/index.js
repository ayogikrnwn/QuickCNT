import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {FotoBoba, Logo} from '../../assets';
import {ButtonPrimary, Gap, Header, Input} from '../../component';
import CardHorizontal from '../../component/CardHorizontal';
import {handleLogin, handleUpdateKehadiran} from '../../context/reducer';
import {ContextReact} from '../../context/state';
import {readMyKehadiranPemilihan, readTouched} from '../../db/method/read';
import {updateKehadiranPemilih} from '../../db/method/update';
import {navigate} from '../../Router/RootNavigation';
import {replaceEmail} from '../../utils';
import {dataLogin, newDataLogin} from '../../utils/data/data';
import {handleUpdateTouched} from './../../context/reducer';

const Home = ({navigation}) => {
  const [state, setState] = React.useState(0);
  const context = React.useContext(ContextReact);
  const {isLogin, touched, kehadiran} = context.data,
    {dispatch} = context;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      readMyKehadiranPemilihan({
        email: replaceEmail(isLogin.email),
        then: res1 => {
          if (res1) {
            readTouched({
              email: replaceEmail(isLogin.email),
              then: res2 => {
                if (res2 < res1) {
                  navigate('FormPemesanan');
                }
              },
              err: error => {
                if (error < res1) {
                  navigate('FormPemesanan');
                }
              },
            });
          }
        },
        err: error => {},
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.contentBottom}>
          <Text style={styles.pesan}> Masukan jumlah kehadiran pemilih </Text>
        </View>
        <View style={styles.btn}>
          <Input
            value={state.toString()}
            onChangeText={e => {
              if (e === '' || /^[0-9]+$/.test(e)) {
                setState(e);
              }
            }}
          />
          <ButtonPrimary
            bg={!parseInt(state) ? '#A0A6AB' : '#0BCAD4'}
            text="Mulai Penghitungan"
            onPress={() =>
              state &&
              updateKehadiranPemilih({
                dataLogin: isLogin,
                value: parseInt(state),
                res: () => {
                  navigation.navigate('FormPemesanan');
                },
                err: error => {
                  // console.log('error', error);
                },
              })
            }
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
  credit: {
    fontFamily: 'Poppins-Light',
    fontSize: 10,
    paddingLeft: 10,
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
