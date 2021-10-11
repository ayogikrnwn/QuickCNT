import {Link} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Logo} from '../../assets';
import {ButtonPrimary, Gap, Input} from '../../component';
import {indonesiaMaju} from '../../assets/index';
import {ContextReact} from '../../context/state';
import {handleLogin} from './../../context/reducer';
import {readFindUser} from '../../db/method/read';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../../Router/RootNavigation';
import {getData} from '../../utils';
const Login = ({navigation}) => {
  const context = React.useContext(ContextReact);
  const {data, dispatch} = context;

  React.useEffect(() => {
    // console.log('data.isLogin', data.isLogin);

    const unsubscribe = navigation.addListener('focus', () => {
      AsyncStorage.getItem('isLogin', function (err, value) {
        if (!err && value) {
          dispatch(handleLogin(JSON.parse(value)));
          navigate('Home');
        }
      });
    });

    return unsubscribe;
  }, [navigation]);

  const onSubmit = () => {
    const email = state.email.replace('@gmail.com', '');
    readFindUser({
      data: {email, password: state.password},
      then: value => {
        dispatch(handleLogin(value));
        AsyncStorage.setItem('isLogin', JSON.stringify(value));
        navigate('Home');
      },
      err: err => console.warn(err),
    });
  };

  const [state, setState] = React.useState({
    email: '',
    password: '',
  });

  const NewField = ({label, name, value}) => {
    return (
      <>
        <Input
          secureTextEntry={name === 'password'}
          label={label || 'berikan label'}
          value={value}
          onChangeText={value =>
            setState({...state, [name || 'nameObj']: value})
          }
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Gap height={12} />
      <Image source={indonesiaMaju} />
      <Text style={styles.text}>Masuk</Text>
      <View style={styles.content}></View>
      {NewField({label: 'Email Address', name: 'email', value: state.email})}

      <Gap height={24} />
      {NewField({label: 'Password', name: 'password', value: state.password})}

      <ButtonPrimary
        onPress={() => {
          onSubmit();
        }}
        text="Masuk"
      />
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
