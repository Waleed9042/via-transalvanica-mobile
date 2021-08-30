import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import normalize from 'react-native-normalize';

const HomeScreen = () => {
  return (
    <View style={styles.MainViewContainer}>
      <View style={styles.ScrollViewContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/app-logo-white.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.mainText}>Welcome To Via Transalvanica</Text>
          <Text style={styles.subText}>Begin a journey of lifetime!</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainViewContainer: {
    flex: 1,
  },
  ScrollViewContainer: {
    flex: 1,
    flexDirection: 'column',
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
});

export default HomeScreen;
