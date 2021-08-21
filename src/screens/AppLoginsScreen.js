import * as React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import normalize from 'react-native-normalize';
//file imports
import ButtonMedium from '../components/common/ButtonMedium';

export default function AppLoginsScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/images/logins-bg.png')}
      style={styles.image}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/app-logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.ButtonsContainer}>
        <ButtonMedium
          buttonText="Log In with Facebook"
          color="#003f75"
          //onPressAction={() => props.navigation.navigate('SignUp')}  facebook-auth
        />
        <ButtonMedium
          buttonText="Log In with Google"
          color="#fb4137"
          //onPressAction={() => props.navigation.navigate('SignUp')}   google auth
        />
        <Text style={styles.divider}>- or -</Text>
        <ButtonMedium
          buttonText="Log In with Email"
          onPressAction={() => props.navigation.navigate('Login')}
          color="#EF7D21"
        />
        <ButtonMedium
          color="#ffffff"
          buttonText="Sign Up with Email"
          textColor="#EF7D21"
          onPressAction={() => props.navigation.navigate('SignUp')}
        />
        <Text style={styles.bottomText}>
          By continuing you are agreeing to our
        </Text>
        <Text style={styles.tos}>Terms of Service</Text>
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
  ButtonsContainer: {
    marginTop: normalize(150, 'width'),
  },
  divider: {
    color: '#ffffff',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: normalize(20, 'width'),
    bottom: normalize(10, 'width'),
  },
  bottomText: {
    textAlign: 'center',
    color: '#ffffff',
  },
  tos: {
    textAlign: 'center',
    fontSize: normalize(15, 'width'),
    color: '#ffffff',
  },
});
