import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {buttonRecord} from '../../assets';
const Record = ({totalButton}) => {
  console.log(totalButton);
  const getButton = () => {
    for (let index = 0; index < totalButton; index++) {
      return (
        <View
          key={index}
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              console.warn(element);
            }}>
            <Image source={buttonRecord} />
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
      }}>
      {totalButton && getButton()}
    </View>
  );
};

export default Record;
