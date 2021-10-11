import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  BlackButton,
  BlueButton,
  GreenButton,
  RedButton,
  YellowButton,
} from '../../assets';
import {ButtonPrimary, Gap, Header} from '../../component';
import {
  handleLogout,
  handleQuickCOunt,
  handleUpdateKehadiran,
  handleUpdateTouched,
} from '../../context/reducer';
import {ContextReact} from '../../context/state';
import {
  readFindUser,
  readMyKehadiranPemilihan,
  readSemuaCalon,
  readTouched,
} from '../../db/method/read';
import {
  updateQount,
  updateQountByUser,
  updateQountInAccount,
} from '../../db/method/update';
import {navigate} from '../../Router/RootNavigation';
import {dataLogin} from '../../utils/data/data';
import {replaceEmail} from './../../utils/function/index';

const FormPemesanan = ({}) => {
  const context = React.useContext(ContextReact),
    {dispatch, data} = context,
    {isLogin, quickCount, touched, kehadiran} = data;
  React.useEffect(() => {
    // readFindUser({})
    readMyKehadiranPemilihan({
      email: replaceEmail(isLogin.email),
      then: res => {
        dispatch(handleUpdateKehadiran(res));
      },
      err: error => {
        console.log('error', error);
      },
    });
    readSemuaCalon({
      then: res => {
        dispatch(handleQuickCOunt(res));
      },
    });
    readTouched({
      email: replaceEmail(isLogin.email),
      then: res => {
        dispatch(handleUpdateTouched(res));
      },
      err: error => {
        dispatch(handleUpdateTouched(0));
      },
    });
  }, [dispatch, handleUpdateTouched]);

  const cekDataObject = obj => {
    if (obj) {
      return true;
    } else {
      return false;
    }
  };

  const pushTouched = calon => {
    // body uopdate by user
    const bodyUpdateByUser = {
      namaTps: replaceEmail(isLogin.email),
      suara: cekDataObject(quickCount[calon].user[replaceEmail(isLogin.email)])
        ? quickCount[calon].user[replaceEmail(isLogin.email)].suara + 1
        : 1,
      total: 0,
    };
    if (touched < kehadiran) {
      updateQount({
        calon,
        value: quickCount[calon].total + 1,
        res: response => {
          updateQountByUser({
            calon,
            value: bodyUpdateByUser,
            res: response => {
              updateQountInAccount({
                email: replaceEmail(isLogin.email),
                value: touched + 1,
                res: response => {},
                err: error => {
                  console.log('error', error);
                },
              });
            },
            email: replaceEmail(isLogin.email),
          });
        },
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Header total={kehadiran} />
        <ScrollView>
          <View style={styles.text}>
            <Text style={styles.texts}>
              Silahkan Klik Tombol Di Bawah Ini Sesuai Nomor Urut Calon
            </Text>
            <Gap height={35} />
            <View style={styles.wrapbtn}>
              <View style={styles.btnview}>
                {/* <Text style={styles.textbtntop}>1</Text>
                <TouchableOpacity onPress={() => {
                  pushTouched()
                }}>
                  <Image source={RedButton} style={styles.btn} />
                </TouchableOpacity>

                <Text style={styles.textbtn}>Calon No. 1</Text> */}
              </View>
              {/* <View style={styles.btnview}>
                <Text style={styles.textbtntop}>1</Text>
                <TouchableOpacity onPress={() => {
                  pushTouched()
                }}>
                  <Image source={GreenButton} style={styles.btn} />
                </TouchableOpacity>
                <Text style={styles.textbtn}>Calon No. 2</Text>
              </View> */}
            </View>
            <View style={styles.wrapbtn}>
              <View style={styles.btnview}>
                {/* <Text style={styles.textbtntop}>1</Text>
                <TouchableOpacity onPress={() => {
                  pushTouched()
                }}>
                  <Image source={BlueButton} style={styles.btn} />
                </TouchableOpacity>
                <Text style={styles.textbtn}>Calon No. 3</Text> */}
              </View>
              <View style={styles.btnview}>
                {/* <Text style={styles.textbtntop}>1</Text>
                <TouchableOpacity onPress={() => {
                  pushTouched()
                }}>
                  <Image source={YellowButton} style={styles.btn} />
                </TouchableOpacity>
                <Text style={styles.textbtn}>Calon No. 4</Text> */}
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={styles.newBtnView}>
                <Text style={styles.newTextbtntop}>
                  {quickCount.calon1.total}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    pushTouched('calon1');
                  }}>
                  <Image source={RedButton} style={styles.btn} />
                </TouchableOpacity>

                <Text style={styles.newTextbtn}>Calon No. 1</Text>
              </View>
              <View style={styles.newBtnView}>
                <Text style={styles.newTextbtntop}>
                  {quickCount.calon2.total}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    pushTouched('calon2');
                  }}>
                  <Image source={GreenButton} style={styles.btn} />
                </TouchableOpacity>
                <Text style={styles.newTextbtn}>Calon No. 2</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.newTextbtntop}>
                  {quickCount.calon3.total}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    pushTouched('calon3');
                  }}>
                  <Image source={BlueButton} style={styles.btn} />
                </TouchableOpacity>
                <Text style={styles.newTextbtn}>Calon No. 3</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.newTextbtntop}>
                  {quickCount.calon4.total}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    pushTouched('calon4');
                  }}>
                  <Image source={YellowButton} style={styles.btn} />
                </TouchableOpacity>
                <Text style={styles.newTextbtn}>Calon No. 4</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.newTextbtntop}>
                  {quickCount.tidakSah.total}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    pushTouched('tidakSah');
                  }}>
                  <Image source={BlackButton} style={styles.btn} />
                </TouchableOpacity>
                <Text style={styles.newTextbtn}>Tidak Sah</Text>
              </View>
            </View>

            {/* <View style={styles.wrapbtncenter}>
              <View style={styles.btnview}>
                <Text style={styles.textbtntop}>1</Text>
                <TouchableOpacity onPress={() => {
                  pushTouched()
                }}>
                  <Image source={BlackButton} style={styles.btn} />
                </TouchableOpacity>
                <Text style={styles.textbtn}>Tidak Sah</Text>
              </View>
            </View> */}
            <Gap height={25} />
            <ButtonPrimary
              onPress={() => {
                if (touched === kehadiran) {
                  AsyncStorage.removeItem('isLogin');
                  dispatch(handleLogout());
                  setTimeout(() => {
                    navigate('Login');
                  }, 1000);
                }
              }}
              text="Selesai"
            />
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
    marginTop: 15,
  },
  texts: {
    textAlign: 'center',
  },
  btn: {
    width: 150,
    height: 150,
  },
  btnview: {
    paddingLeft: 25,
  },
  textbtn: {
    paddingLeft: 35,
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
  },
  textbtntop: {
    paddingLeft: 65,
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
  },
  wrapbtn: {
    flexDirection: 'row',
  },
  wrapbtncenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  newBtnView: {
    flex: 1,
    alignItems: 'center',
  },
  newTextbtntop: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    alignContent: 'center',
  },
  newTextbtn: {
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
    alignContent: 'center',
  },
});
