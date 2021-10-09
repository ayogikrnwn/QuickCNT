/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import FlashMessage from "react-native-flash-message";
import {Ruter} from './Router';

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Ruter />
    </NavigationContainer>
    <FlashMessage position="top" /> 
    </>
  )
};

export default App;
