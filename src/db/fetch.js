import database from '@react-native-firebase/database';

export const testFetching = () => {
  console.log('masuk sini bre');
  database()
    .ref('/users/123')
    .set({
      name: 'Ada Lovelace',
      age: 31,
    })
    .then(() => console.log('Data set.'));
};
