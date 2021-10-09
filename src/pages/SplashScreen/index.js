import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      
      <View style={styles.content}>
        <View style={styles.context}>
          <Text style={styles.textblack}>Quick</Text>
          <Text style={styles.textchoco}>Count</Text>
        </View>
      </View>
      <Text style={styles.ver}>Agus Setiawan</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcredit: {
    fontFamily: 'Poppins-Light',
    fontSize: 10,
  },
  img: {
    height: 104,
    width: 214,
  },
  textblack: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  textchoco: {
    fontFamily: 'Poppins-Bold',
    color: 'red',
    fontSize: 24,
  },
  context: {
    flexDirection: 'row',
  },
  content: {
    paddingTop: 28,
  },
});
