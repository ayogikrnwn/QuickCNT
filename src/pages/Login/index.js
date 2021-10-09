import {Link} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {ButtonPrimary, Gap, Input} from '../../component';

const Login = () => {
  return (
    <View style={styles.container}>
      <Gap height={12} />
      <Text style={styles.text}>Masuk</Text>
      <View style={styles.content}></View>

      <Input
        label="Email Address"
        // value={form.email}
        // onChangeText={(value) => setForm('email', value)}
      />
      <Gap height={24} />
      <Input
        label="Password"
        // onChangeText={(value) => setForm('password', value)}
        // secureTextEntry
      />
       <ButtonPrimary text="Masuk"  />
        <Gap height={18} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 23,
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
