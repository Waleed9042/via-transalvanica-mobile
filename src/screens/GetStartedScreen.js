import * as React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';

export default function GetStartedScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/images/start-screen-bg-2.png')}
      style={styles.image}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/app-logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.mainText}>THE ROAD THAT UNITES</Text>
      <View style={styles.GetStartedContainer}>
        <TouchableOpacity
          style={styles.GetStartedButton}
          activeOpacity={0.5}
          onPress={() => props.navigation.replace('LoginsScreen')}
          loading>
          <View style={styles.GetStartedButtonContent}>
            <Text style={styles.TextStyle}> Get Started </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  logoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: normalize(60, 'width'),
  },
  logoImage: {
    width: normalize(250, 'width'),
    height: normalize(150, 'height'),
  },
  mainText: {
    bottom: normalize(35, 'width'),
    textAlign: 'center',
    color: '#EF7D21',
  },
  GetStartedContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: normalize(50, 'height'),
  },
  GetStartedButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#EF7D21',

    height: normalize(45, 'width'),
    width: normalize(320, 'width'),
    borderRadius: normalize(5, 'width'),
    marginBottom: normalize(30, 'width'),
  },
  GetStartedButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: normalize(20, 'width'),
  },
});
