import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {handleLogin} from './reducer';
import {
  setCount,
  setIsLogin,
  setKehadiran,
  setTouched,
  setLogout,
} from './type';

const secrets = () => {
  return AsyncStorage.getItem('isLogin', (error, value) => {
    if (!error) {
      //If there are no errors
      //handle result
      if (value !== null) return value;
    } else {
      return false;
    }
  });
};

const initialCOunt = {
  calon1: {
    user: {
      tps1: {
        namaTps: 'tps1',
        suara: 0,
        total: 0,
      },
    },
    total: 0,
  },
  calon2: {
    user: {
      tps1: {
        namaTps: 'tps1',
        suara: 0,
        total: 0,
      },
    },
    total: 0,
  },
  calon3: {
    user: {
      tps1: {
        namaTps: 'tps1',
        suara: 0,
        total: 0,
      },
    },
    total: 0,
  },
  calon4: {
    user: {
      tps1: {
        namaTps: 'tps1',
        suara: 0,
        total: 0,
      },
    },
    total: 0,
  },
  tidakSah: {
    user: {
      tps1: {
        namaTps: 'tps1',
        suara: 0,
        total: 0,
      },
    },
    total: 0,
  },
};

const initialState = {
    isLogin: false,
    quickCount: initialCOunt,
    touched: 0,
    kehadiran: 0,
  },
  reducersReact = (state, action) => {
    switch (action.type) {
      case setIsLogin:
        return {...state, isLogin: action.payload};
      case setCount:
        return {...state, quickCount: action.payload};
      case setTouched:
        return {...state, touched: action.payload};
      case setKehadiran:
        return {...state, kehadiran: action.payload};
      case setLogout:
        return {...state, ...initialState};
      default:
        return state;
    }
  },
  ContextReact = React.createContext();

export {initialState, ContextReact, reducersReact};
