import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {handleLogin} from '../../context/reducer';
import {ContextReact} from '../../context/state';

import {
  DaftarHarga,
  DetailPesanan,
  FormPemesanan,
  GetStarted,
  Home,
  Login,
  SplashScreen,
} from '../../pages';
import QuickCount from '../../pages/QuickCount';
import {navigate} from '../RootNavigation';

const Stack = createStackNavigator();

const Ruter = () => {
  const context = React.useContext(ContextReact),
    {dispatch, data} = context,
    {isLogin, touched} = data;

  React.useEffect(() => {
    // AsyncStorage.removeItem('isLogin');
    AsyncStorage.getItem('isLogin', function (err, value) {
      if (!err && value) {
        dispatch(handleLogin(JSON.parse(value)));
      }
    });
  }, []);

  const Auth = () => {
    return (
      <React.Fragment>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {touched === 0 && (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        )}
      </React.Fragment>
    );
  };

  const App = () => {
    return (
      <React.Fragment>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        {touched === 0 ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        ) : (
          <></>
        )}

        <Stack.Screen
          name="DaftarHarga"
          component={DaftarHarga}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FormPemesanan"
          component={FormPemesanan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailPesanan"
          component={DetailPesanan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QuickCount"
          component={QuickCount}
          options={{headerShown: false}}
        />
      </React.Fragment>
    );
  };

  const cekIsLogin = () => {
    try {
      isLogin;
    } catch {
      return false;
    }
    return false;
  };
  return (
    // initialRouteName="Login"
    <Stack.Navigator initialRouteName="Login">
      {/* {!isLogin ? Auth() : App()} */}
      {Auth()}

      {isLogin && App()}
    </Stack.Navigator>
  );
};

export default Ruter;
