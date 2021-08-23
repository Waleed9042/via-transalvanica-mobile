/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import normalize from 'react-native-normalize';
import {useNetInfo} from '@react-native-community/netinfo';
//file imports
import LoginForm from '../components/login/LoginForm';
import ButtonMedium from '../components/common/ButtonMedium';

export default function LoginScreen(props) {
  const isConnected = useNetInfo();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require('../assets/images/start-screen-bg.png')}
        style={styles.image}>
        <View style={styles.SigninContainer}>
          <LoginForm isConnected={isConnected} nav={props.navigation} />
          <View style={styles.SignupContainer}>
            <Text style={styles.GetRegisteredContainer}>
              Dont have an account yet?
            </Text>
            <View style={styles.SignupButtonContent}>
              <ButtonMedium
                buttonText="Sign up Now!"
                onPressAction={() => props.navigation.navigate('SignUp')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  SigninContainer: {
    flex: 3,
    flexDirection: 'column',
    marginTop: normalize(180, 'width'),
  },
  SignupContainer: {
    flex: 2.2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    top: normalize(20, 'width'),
  },
  GetRegisteredContainer: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: normalize(14, 'width'),
  },
  SignupButtonContent: {
    bottom: normalize(14, 'width'),
  },
});
