/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import normalize from 'react-native-normalize';
import {connect} from 'react-redux';
//file imports
import {setJwtToken, setUserId} from '../../redux/actions';
import ButtonMedium from '../common/ButtonMedium';
import {useNetInfo} from '@react-native-community/netinfo';
import {login} from '../../services/dataServices';
import {NETWORK_ERROR} from '../../constants/Constants';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const net = useNetInfo();

  const loginHandler = async () => {
    // if (net.isConnected) {
    //   if (email === '' || password === '') {
    //     alert('Login Error\nEmail/Password missing.');
    //   } else {
    //     setIsLoading(true);
    //     const res = await login(email, password);
    //     console.log(res);
    //     if (res.data.success) {
    //       alert('Login SuccessFull');
    //       setIsLoading(false);
    //       props.nav.navigate('HomePage');
    //     } else {
    //       setIsLoading(false);
    //       alert('User Not Found');
    //     }
    //   }
    // } else {
    //   alert('No Internet Connection');
    // }
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
            buttonText={isLoading ? <ActivityIndicator /> : 'Log In'}
            onPressAction={loginHandler}
            disabled={isLoading}
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
