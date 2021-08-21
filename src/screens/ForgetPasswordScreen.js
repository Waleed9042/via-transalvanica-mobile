import React, {useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, TextInput} from 'react-native';
import normalize from 'react-native-normalize';
import ButtonMedium from '../components/common/ButtonMedium';

export default function ForgetPasswordScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [toggle, setToggle] = useState(false);

  const saveNewPassword = () => {
    props.navigation.navigate('Tutorial');
  };

  return (
    <ImageBackground
      source={require('../assets/images/forget-password-bg.png')}
      style={styles.image}>
      {toggle ? (
        <View>
          <View>
            <Text style={styles.mainText2}>{'Reset Password'}</Text>
            <Text style={styles.mainSubText}>
              {'Please choose a new password for your account.'}
            </Text>
          </View>
          <View style={styles.InputContainer}>
            <Text style={styles.emailText}>Password*</Text>
            <TextInput
              style={styles.InputStyle}
              value={password}
              onChangeText={text => setPassword(text)}
              keyboardType="phone-pad"
              maxLength={13}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.InputContainer2}>
            <Text style={styles.emailText}>Retype New Password*</Text>
            <TextInput
              style={styles.InputStyle}
              value={rePassword}
              onChangeText={text => setRePassword(text)}
              keyboardType="phone-pad"
              maxLength={13}
            />
          </View>
        </View>
      ) : (
        <View>
          <View>
            <Text style={styles.mainText}>
              {'We are sorry to hear that you Forget you Password!'}
            </Text>
            <Text style={styles.mainSubText}>
              {'Please enter your e-mail address below.'}
            </Text>
            <Text style={styles.mainSubText}>
              {
                'You will be requested to create a new password, once you complete your first login.'
              }
            </Text>
          </View>
          <View style={styles.InputContainer}>
            <Text style={styles.emailText}>Email*</Text>
            <TextInput
              style={styles.InputStyle}
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="phone-pad"
              maxLength={13}
            />
          </View>
          <View style={styles.divider} />
        </View>
      )}
      <View style={styles.SignupContainer}>
        <ButtonMedium
          color="#EF7D21"
          buttonText={toggle ? 'Save New Password' : 'Reset Password'}
          onPressAction={() => {
            toggle ? saveNewPassword() : setToggle(true);
          }}
        />
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
  mainText: {
    marginTop: normalize(150, 'width'),
    fontSize: normalize(15, 'width'),
    marginLeft: normalize(15, 'width'),
    marginRight: normalize(15, 'width'),
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  mainText2: {
    marginTop: normalize(150, 'width'),
    marginBottom: normalize(20, 'width'),
    fontSize: normalize(30, 'width'),
    letterSpacing: normalize(2, 'width'),
    marginLeft: normalize(15, 'width'),
    marginRight: normalize(15, 'width'),
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  mainSubText: {
    fontSize: normalize(15, 'width'),
    lineHeight: normalize(20, 'width'),
    marginLeft: normalize(15, 'width'),
    marginRight: normalize(15, 'width'),
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  InputContainer: {
    flexDirection: 'column',
    height: normalize(45, 'width'),
    marginTop: normalize(60, 'width'),
    color: '#ffffff',
  },
  InputContainer2: {
    flexDirection: 'column',
    height: normalize(45, 'width'),
    color: '#ffffff',
  },
  emailText: {
    color: '#ffffff',
    fontSize: normalize(14, 'width'),
    paddingLeft: normalize(25, 'width'),
  },
  InputStyle: {
    flex: 1,
    paddingLeft: normalize(25, 'width'),
    color: '#ffffff',
    fontSize: normalize(14, 'width'),
  },
  divider: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    marginBottom: normalize(10, 'width'),
    marginLeft: normalize(25, 'width'),
    marginRight: normalize(25, 'width'),
  },
  SignupContainer: {
    flex: 2.2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
