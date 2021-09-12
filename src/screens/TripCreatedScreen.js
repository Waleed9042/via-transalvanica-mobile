import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import normalize from 'react-native-normalize';
import ButtonMedium from '../components/common/ButtonMedium';

export default function TripCreatedScreen(props) {
  const {error = false} = props && props.route && props.route.params;
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/trip-created.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.skipContainer}>
        <Text style={styles.mainText}>
          {error ? 'Trip Couldnt Be Created' : 'Trip Created'}
        </Text>
        <Text style={styles.subText}>
          {error
            ? 'There is some issue with the network, please try again later !!!'
            : 'Your trip was created successfully!'}
        </Text>
        <Text style={styles.subText}>
          {error
            ? 'Sorry for the Inconvenience'
            : 'If you want you can add this trip to your calender and get reminders.'}
        </Text>
      </View>
      <View style={styles.GetStartedContainer}>
        {error ? null : (
          <ButtonMedium
            color="#ffffff"
            textColor="#EF7D21"
            buttonText="Add to Calender"
            //onPressAction={() => props.navigation.replace('SignUp')}
          />
        )}
        <ButtonMedium
          buttonText={error ? 'OK' : 'no, Thanks !'}
          onPressAction={() => props.navigation.replace('PlanTrip')}
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
