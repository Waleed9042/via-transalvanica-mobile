import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import normalize from 'react-native-normalize';

const getImage = name => {
  switch (name) {
    case 'Bucovina':
      return require('../../assets/images/region-image-1.png');
    case 'Highland':
      return require('../../assets/images/region-image-2.png');
    case 'Terra Siculorum':
      return require('../../assets/images/region-image-3.png');
    case 'Terra Saxonum':
      return require('../../assets/images/region-image-4.png');
    case 'Terra Banatica':
      return require('../../assets/images/region-image-5.png');
    default:
      break;
  }
};
const RegionButton = ({name, setRegion}) => {
  const navigation = useNavigation();
  const image = getImage(name);
  const handleButtonClick = () => {
    setRegion(name);
    navigation.replace('location');
  };
  return (
    <TouchableOpacity
      style={styles.skipButtonContainer}
      activeOpacity={0.5}
      onPress={handleButtonClick}>
      <View
        style={{
          width: '100%',
          height: normalize(40, 'height'),
          borderRadius: 20,
        }}>
        <ImageBackground
          source={image}
          style={styles.image}
          resizeMode={'cover'}>
          <Text style={styles.regionName}>{name}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skipButtonContainer: {
    padding: normalize(20, 'width'),
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
  },
  regionName: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: normalize(15, 'width'),
  },
});

export default RegionButton;
