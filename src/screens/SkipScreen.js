import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import normalize from 'react-native-normalize';
import ButtonMedium from '../components/common/ButtonMedium';

export default function SkipScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/test.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.skipContainer}>
        <Text style={styles.mainText}>Skipping Sign Up</Text>
        <Text style={styles.subText}>
          You choose to skip the SignUp process!
        </Text>
        <Text style={styles.subText}>
          If you do so, you will not be able to access some of the
          functionalities of our App
        </Text>
      </View>
      <View style={styles.GetStartedContainer}>
        <ButtonMedium
          color="#ffffff"
          textColor="#EF7D21"
          buttonText="Return To Sign Up"
          onPressAction={() => props.navigation.replace('SignUp')}
        />
        <ButtonMedium
          buttonText="Skip for now"
          onPressAction={() => props.navigation.replace('HomePage')}
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
