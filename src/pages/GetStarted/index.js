import { Link } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../assets';
import { ButtonPrimary, Gap, Input } from '../../component';

const GetStarted = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Logo />
        <Gap height={12} />
        <Text style={styles.text}>Masuk</Text>
        <View style={styles.content}>
          <Input
            label="Email Address"
            // value={form.email}
            // onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            // onChangeText={(value) => setForm('password', value)}
           
          />
        </View>
        <Gap height={24} />
        <ButtonPrimary title="Masuk" />
        <Gap height={18} />
      
      </View>
     
    </>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentTop: {
    paddingHorizontal: 80,
    paddingTop: 30,
  },
  title: {
    marginTop: 23,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    fontSize: 24,
    color: '#93573D',
  },
  desc: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  contentBottom: {
    paddingTop: 115,
    paddingHorizontal: 80,
  },
  contact: {
    paddingTop: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  desccont: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    paddingLeft: 5,
  },
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
  },
  content: {
    paddingTop: 34,
  },
  link: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
