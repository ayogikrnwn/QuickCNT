import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import { Gap } from '..';
import { FotoBoba } from '../../assets';

const CardHorizontal = () => {
  return (
    <View style={styles.carousel}>
      <ScrollView horizontal>
        <Image source={FotoBoba} />
        <Gap width={20} />
        <Image source={FotoBoba} />
        <Gap width={20} />
        <Image source={FotoBoba} />
        <Gap width={20} />
        <Image source={FotoBoba} />
      </ScrollView>
    </View>
  );
};

export default CardHorizontal;

const styles = StyleSheet.create({
  carousel: {
    flexDirection: 'row',
    paddingTop: 25,
    paddingLeft: 13,
    marginRight: 10,
  },
});
