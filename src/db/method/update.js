import database from '@react-native-firebase/database';
import {replaceEmail, stringToJson} from '../../utils';
import {dataLogin} from '../../utils/data/data';

export const updateKehadiranPemilih = ({dataLogin, value, res, err}) => {
  const {email} = dataLogin;
  database()
    .ref(`/user/${replaceEmail(email)}/kehadiranPemilih`)
    .set(value)
    .then(snapShot => {
      if (res) {
        return res(snapShot);
      }
    })
    .catch(error => {
      if (err) {
        return err(error);
      }
    });
};

export const updateQount = ({calon, value, res, err}) => {
  const {email} = dataLogin;
  database()
    .ref(`/QuickCount/${calon}/total`)
    .set(value)
    .then(snapShot => {
      if (res) {
        return res(snapShot);
      }
    })
    .catch(error => {
      if (err) {
        return err(error);
      }
    });
};
export const updateQountByUser = ({calon, value, res, err, email}) => {
  database()
    .ref(`/QuickCount/${calon}/user/${email}`)
    .set(value)
    .then(snapShot => {
      if (res) {
        return res(snapShot);
      }
    })
    .catch(error => {
      if (err) {
        return err(error);
      }
    });
};

export const updateQountInAccount = ({value, res, err, email}) => {
  database()
    .ref(`/user/${email}/jumlahPenekanan`)
    .set(value)
    .then(snapShot => {
      if (res) {
        return res(snapShot);
      }
    })
    .catch(error => {
      if (err) {
        return err(error);
      }
    });
};
