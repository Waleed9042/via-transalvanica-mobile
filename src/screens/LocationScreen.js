import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import normalize from 'react-native-normalize';
import ButtonMedium from '../components/common/ButtonMedium';

export default function LocationScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/location.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.skipContainer}>
        <Text style={styles.mainText}>Allow access to location</Text>
        <Text style={styles.subText}>
          We need to have access to your location to give you the best
          experience
        </Text>
        <Text style={styles.subText}>
          through out the app, please check your phone settings and allow us
          access
        </Text>
      </View>
      <View style={styles.GetStartedContainer}>
        <ButtonMedium
          color="#ffffff"
          textColor="#EF7D21"
          buttonText="Continue"
          onPressAction={() => props.navigation.replace('SelectSegment')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF7D21',
  },
  logoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: normalize(170, 'width'),
  },
  logoImage: {
    width: normalize(250, 'width'),
    height: normalize(160, 'height'),
  },
  mainText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: normalize(20, 'width'),
    marginTop: normalize(50, 'width'),
    marginBottom: normalize(20, 'width'),
  },
  subText: {
    textAlign: 'center',
    color: '#ffffff',
  },
  GetStartedButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fab81e',

    height: normalize(45, 'width'),
    width: normalize(170, 'width'),
    borderRadius: normalize(50, 'width'),
    marginBottom: normalize(30, 'width'),
  },
  GetStartedButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    color: '#6691d5',
    fontWeight: 'bold',
    fontSize: normalize(16, 'width'),
  },
  GetStartedContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: normalize(50, 'height'),
  },
});
