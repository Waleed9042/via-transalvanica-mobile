import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import normalize from 'react-native-normalize';
import {useNetInfo} from '@react-native-community/netinfo';
import {validate} from '../utils/utilities';
import EStyleSheet from 'react-native-extended-stylesheet';
import ButtonMedium from '../components/common/ButtonMedium';

function SignUpScreen(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const net = useNetInfo();

  const onChangeText = (name, value) => {
    switch (name) {
      case 'firstName':
        return setFirstName(value);
      case 'lastName':
        return setLastName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'rePassword':
        return setRePassword(value);
      default:
        break;
    }
  };

  const submitFormHandler = async () => {
    //replace alerts with toaster
    if (net.isConnected) {
      if (
        firstName === '' ||
        email === '' ||
        password === '' ||
        rePassword === '' ||
        lastName === ''
      ) {
        alert('Please Enter All the details');
        return;
      }
      const isValidFName = validate('firstName', firstName);
      const isValidEmail = validate('email', email);
      if (!isValidFName) {
        alert('Invalid first Name');
        return;
      }
      if (!isValidEmail) {
        alert('Invalid Email');
        return;
      }
      if (password.toString() !== rePassword.toString()) {
        alert('Passwords doesnt match');
        return;
      }
      setIsLoading(true);
      props.navigation.navigate('UserInfoScreen');
    } else {
      //toaster
      alert('No Internet Connection');
    }
    setIsLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require('../assets/images/register-bg.png')}
        style={styles.image}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 74 : 0}>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContainer}>
            <View style={styles.SignupFormContainer}>
              <View style={styles.SignupFormGroup}>
                <View style={styles.InputContainer}>
                  <Text style={styles.emailText}>First Name*</Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={firstName}
                    onChangeText={text => onChangeText('firstName', text)}
                    keyboardType="phone-pad"
                    maxLength={13}
                  />
                </View>
                <View style={styles.divider} />
                <View style={styles.InputContainer}>
                  <Text style={styles.emailText}>Last Name*</Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={lastName}
                    onChangeText={text => onChangeText('lastName', text)}
                    keyboardType="phone-pad"
                    maxLength={13}
                  />
                </View>
                <View style={styles.divider} />
                <View style={styles.InputContainer}>
                  <Text style={styles.emailText}>E-mail*</Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={email}
                    onChangeText={text => onChangeText('email', text)}
                    keyboardType="phone-pad"
                    maxLength={13}
                  />
                </View>
                <View style={styles.divider} />
                <View style={styles.InputContainer}>
                  <Text style={styles.emailText}>Password*</Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={password}
                    onChangeText={text => onChangeText('password', text)}
                    keyboardType="phone-pad"
                    maxLength={13}
                  />
                </View>
                <View style={styles.divider} />
                <View style={styles.InputContainer}>
                  <Text style={styles.emailText}>Retype Password*</Text>
                  <TextInput
                    style={styles.InputStyle}
                    value={rePassword}
                    onChangeText={text => onChangeText('rePassword', text)}
                    keyboardType="phone-pad"
                    maxLength={13}
                  />
                </View>
                <View style={styles.SignInContainer}>
                  <ButtonMedium
                    color="#EF7D21"
                    buttonText="Sign up"
                    onPressAction={submitFormHandler}
                    disabled={isLoading}
                  />
                  <Text style={styles.tosText}>
                    {'By continuing you are agreeing to Our'}
                  </Text>
                  <Text style={styles.tos}>{'Terms of Service'}</Text>
                </View>
                <View style={styles.loginMessage}>
                  <Text style={styles.bottomText}>
                    {'Already have an account?'}
                  </Text>
                  <ButtonMedium
                    textColor="#ffffff"
                    buttonText="Log in Now!"
                    onPressAction={() => props.navigation.navigate('Login')}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

export default SignUpScreen;

const styles = EStyleSheet.create({
  image: {
    flex: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  container: {
    flex: 10,
    paddingTop: normalize(70, 'height'),
  },
  scroll: {
    flex: 3,
    flexDirection: 'column',
  },
  scrollContainer: {flexGrow: 1},
  SignupFormContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop: normalize(175, 'width'),
  },
  SignupFormGroup: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  InputContainer: {
    flexDirection: 'column',
    height: normalize(45, 'width'),
    color: '#ffffff',
  },
  emailText: {
    color: '#ffffff',
    fontSize: normalize(14, 'width'),
  },
  InputStyle: {
    flex: 1,
    paddingLeft: 12,
    color: '#ffffff',
    fontSize: normalize(14, 'width'),
  },
  divider: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    marginBottom: normalize(10, 'width'),
  },
  tosText: {
    color: '#ffffff',
    textAlign: 'center',
    bottom: normalize(20, 'width'),
  },
  tos: {
    color: '#ffffff',
    textAlign: 'center',
    bottom: normalize(20, 'width'),
    fontWeight: 'bold',
  },
  bottomText: {
    color: '#ffffff',
    textAlign: 'center',
    top: normalize(15, 'width'),
  },
  logIn: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginMessage: {
    marginTop: normalize(50, 'width'),
  },
  SignInContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginTop: normalize(20, 'width'),
  },
});
