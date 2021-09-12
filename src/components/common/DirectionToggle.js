import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';

const RegionButton = ({direction, toggle, handleToggle}) => {
  const img =
    direction === 'N'
      ? require('../../assets/images/N-1.png')
      : require('../../assets/images/S-1.png');
  const imgS =
    direction === 'N'
      ? require('../../assets/images/N.png')
      : require('../../assets/images/S.png');

  return (
    <TouchableOpacity
      style={styles.skipButtonContainer}
      activeOpacity={0.5}
      onPress={() => handleToggle(!toggle)}>
      {toggle ? (
        <Image
          source={imgS}
          style={styles.ImageCardProduct}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={img}
          style={styles.ImageCardProduct}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skipButtonContainer: {
      padding:normalize(40, 'width'),
      alignSelf: 'center'
  },
});

export default RegionButton;
