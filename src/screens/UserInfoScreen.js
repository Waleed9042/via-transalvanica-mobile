/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import normalize from 'react-native-normalize';
//import {launchImageLibrary} from 'react-native-image-picker';
import ButtonMedium from '../components/common/ButtonMedium';
import {NETWORK_ERROR} from '../constants/Constants';
import {addUserName} from '../services/dataServices';
import {useNetInfo} from '@react-native-community/netinfo';
export default function UserInfoScreen(props) {
  //const [photo, setPhoto] = useState(null);
  const [userName, setUserName] = useState('');
  const {userId} = props.route.params;
  const [isLoading, setIsLoading] = useState(false);
  const net = useNetInfo();

  //have to see image upload issue also need to add round image like in sketch
  // const handleChoosePhoto = () => {
  //   const options = {
  //     noData: true,
  //   };
  //   launchImageLibrary(options, response => {
  //     console.log('--->', photo);
  //     if (response.uri) {
  //       setPhoto(response);
  //     }
  //   });
  // };

  const submitFormHandler = async () => {
    if (net.isConnected) {
      if (userName === '') {
        alert('Please Enter User Name');
        return;
      }

      setIsLoading(true);
      const res = await addUserName(userId, userName);

      if (res.data.success) {
        alert('Sign Up Completed');
        setIsLoading(false);

        props.navigation.navigate('Greeting');
      } else {
        alert(NETWORK_ERROR);
        setIsLoading(false);
      }
    } else {
      //toaster
      alert('No Internet Connection');
    }
  };
  return (
    <ImageBackground
      source={require('../assets/images/user-info-bg.png')}
      style={styles.image}>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>
          {'Please choose a photo and username to attach with your account.'}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* {photo && (
          <Image source={{uri: photo.uri}} style={{width: 300, height: 300}} />
        )} */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/test.png')}
            style={styles.logoImage}
          />
        </View>
      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.emailText}>Username*</Text>
        <TextInput
          style={styles.InputStyle}
          value={userName}
          onChangeText={text => setUserName(text)}
          keyboardType="phone-pad"
          maxLength={13}
        />
      </View>
      <View style={styles.divider} />
      <View>
        <ButtonMedium
          color="#EF7D21"
          buttonText={isLoading ? <ActivityIndicator /> : 'Finish'}
          onPressAction={submitFormHandler}
        />
      </View>
      <View style={styles.SignupContainer}>
        <View style={styles.loginMessage}>
          <Text style={styles.bottomText}>{'Already have an account?'}</Text>
          <ButtonMedium
            textColor="#ffffff"
            buttonText="Log in Now!"
            onPressAction={() => props.navigation.navigate('Login')}
          />
        </View>
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
  headingTextContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: normalize(120, 'width'),
    width: normalize(320, 'width'),
  },
  headingText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: normalize(15, 'width'),
  },
  logoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: normalize(150, 'width'),
    height: normalize(80, 'height'),
  },
  InputContainer: {
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
  bottomText: {
    color: '#ffffff',
    textAlign: 'center',
    top: normalize(15, 'width'),
  },
  SignupContainer: {
    flex: 2.2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
