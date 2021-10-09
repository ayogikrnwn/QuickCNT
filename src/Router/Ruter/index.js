import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {DaftarHarga, DetailPesanan, FormPemesanan, GetStarted, Home, Login, SplashScreen} from '../../pages';

const Stack = createStackNavigator();

const Ruter = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />


<Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
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
    </Stack.Navigator>
  );
};

export default Ruter;
