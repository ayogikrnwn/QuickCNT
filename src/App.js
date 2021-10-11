/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Ruter} from './Router';

//Import react-native-splash-screen.
import SplashScreen from 'react-native-splash-screen';
import {navigationRef} from './Router/RootNavigation';
import {ContextReact, initialState, reducersReact} from './context/state';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [data, dispatch] = React.useReducer(reducersReact, initialState);
  return (
    <>
      <ContextReact.Provider value={{data: data, dispatch: dispatch}}>
        <NavigationContainer ref={navigationRef}>
          <Ruter />
        </NavigationContainer>
        <FlashMessage position="top" />
      </ContextReact.Provider>
    </>
  );
};

export default App;
