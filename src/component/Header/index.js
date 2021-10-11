import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Logo} from '../../assets';
import {ContextReact} from '../../context/state';

const Header = ({total}) => {
  const context = React.useContext(ContextReact);
  const {touched} = context.data;

  return (
    <View style={styles.header}>
      <View style={styles.contenheader}>
        {/* <Image source={Logo} style={styles.img} /> */}

        <Text style={styles.text}>Quick Count </Text>
        {total ? (
          <Text style={styles.text}>
            {touched || 0} dari {total || 0}
          </Text>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0BCAD4',
    height: 153,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingTop: 10,
  },
  contenheader: {
    paddingTop: 5,
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 91,
    height: 96,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 30,
  },
  textbobcer: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 30,
  },
  bobcer: {
    flexDirection: 'row',
  },
  textchoco: {
    fontFamily: 'Poppins-Medium',
    color: '#FAE8D8',
    fontSize: 24,
  },
});
