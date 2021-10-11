import {
  setCount,
  setIsLogin,
  setKehadiran,
  setLogout,
  setTouched,
} from './type';

export const handleLogin = data => {
  return {type: setIsLogin, payload: data};
};

export const handleQuickCOunt = data => {
  return {type: setCount, payload: data};
};

export const handleUpdateTouched = data => {
  return {type: setTouched, payload: data};
};

export const handleUpdateKehadiran = data => {
  return {type: setKehadiran, payload: data};
};

export const handleLogout = data => {
  return {type: setLogout, payload: data};
};
