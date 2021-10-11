import database from '@react-native-firebase/database';
import {navigate} from '../../Router/RootNavigation';

export const readFindUser = ({data, then, err}) => {
  const {email, password} = data;
  return database()
    .ref(`/user/${email}`)
    .on('value', function (snapShot) {
      const value = snapShot.val();
      if (value) {
        if (password === value.password) {
          return then(value);
        } else {
          return err(false);
        }
      } else {
        return err(false);
      }
    });
};

export const readMyKehadiranPemilihan = ({email, then, err}) => {
  return database()
    .ref(`/user/${email}/kehadiranPemilih`)
    .on('value', function (snapShot) {
      const value = snapShot.val();
      if (value) {
        return then(value);
      } else {
        return err(false);
      }
    });
};
export const readSemuaCalon = ({then, res}) => {
  return database()
    .ref(`/QuickCount`)
    .on('value', function (snapShot) {
      const value = snapShot.val();
      if (value) {
        return then(value);
      } else {
        return err(false);
      }
    });
};

export const readTouched = ({then, email, err}) => {
  database()
    .ref(`/user/${email}/jumlahPenekanan`)
    .on('value', function (snapShot) {
      const value = snapShot.val();
      if (value) {
        then(value);
        // navigate('FormPemesanan');
      } else {
        err && err(0);
      }
    });
};
