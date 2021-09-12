import React from 'react';
import {StyleSheet, Image} from 'react-native';
import normalize from 'react-native-normalize';

const HeaderBackButton = props => {
  return (
    <Image
      source={require('../../assets/images/button-back.png')}
      style={styles.BackIcon}
      resizeMode="contain"
    />
  );
};

export default HeaderBackButton;
const styles = StyleSheet.create({
  BackIcon: {
    width: normalize(22, 'width'),
    marginLeft: normalize(15, 'width'),
  },
});
