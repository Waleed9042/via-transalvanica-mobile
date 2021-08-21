import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';
import {connect} from 'react-redux';
//file imports
import {setJwtToken, setUserId} from '../../redux/actions';
import ButtonMedium from '../common/ButtonMedium';
const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    if (email === '' || password === '') {
      alert('Login Error\nEmail/Password missing.');
    } else {
      props.nav && props.nav.navigate('HomePage');
    }
  };
  return (
    <View style={styles.SignInMainSection}>
      <View style={styles.SignInFormGroup}>
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
        <View style={styles.InputContainer}>
          <Text style={styles.emailText}>Password*</Text>
          <TextInput
            style={styles.InputStyle}
            onChangeText={pw => setPassword(pw)}
            value={password}
            //secureTextEntry={true}
            keyboardType="phone-pad"
            maxLength={13}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonMedium
            color="#EF7D21"
            buttonText="Log In"
            onPressAction={loginHandler}
          />
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => props.nav && props.nav.navigate('ForgetPassword')}
              loading>
              <Text style={styles.forgetPwText}>Forget your Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    setUserId: value => dispatch(setUserId(value)),
    setJwtToken: value => dispatch(setJwtToken(value)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);

const styles = StyleSheet.create({
  SignInMainSection: {
    flex: 2.8,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  SignInFormGroup: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  InputContainer: {
    flexDirection: 'column',
    height: normalize(45, 'width'),
    color: '#ffffff',
    paddingLeft: normalize(25, 'width'),
  },
  InputStyle: {
    flex: 1,
    paddingLeft: 12,
    color: '#ffffff',
    fontSize: normalize(14, 'width'),
  },
  emailText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: normalize(14, 'width'),
  },
  divider: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    marginBottom: normalize(10, 'width'),
  },
  buttonContainer: {
    paddingTop: normalize(20, 'width'),
  },
  forgetPwText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    bottom: normalize(20, 'width'),
  },
});
