import AsyncStorage from '@react-native-async-storage/async-storage';

export const dataLogin = async ({res, err}) => {
  var value, collect;
  try {
    value = await AsyncStorage.getItem('isLogin').then(values => {
      collect = values;
    });
  } catch (error) {}
  if (res) {
    res(collect);
  }
  return collect;
};
