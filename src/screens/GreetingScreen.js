import * as React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';

export default function GreetingScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/images/greeting-bg.png')}
      style={styles.image}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>{'Congratulations!'}</Text>
        <Text style={styles.greetingSubText}>
          {'Your Account has been created.'}
        </Text>
        <Text style={styles.greetingSubText2}>
          {'You can now continue your experience on Via Transalvanica'}
        </Text>
      </View>
      <View style={styles.GetStartedContainer}>
        <TouchableOpacity
          style={styles.GetStartedButton}
          activeOpacity={0.5}
          onPress={() => props.navigation.replace('Tutorial')}
          loading>
          <View style={styles.GetStartedButtonContent}>
            <Text style={styles.TextStyle}>Proceed to My Account</Text>
            {/* <AntDesign
                name="right"
                color="#6691d5"
                size={normalize(20, 'width')}
                style={styles.ButtonIconStyle}
              /> */}
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
  greetingContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: normalize(300, 'width'),
    marginTop: normalize(100, 'width'),
  },
  greetingText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: normalize(35, 'width'),
    letterSpacing: normalize(2, 'width'),
  },
  greetingSubText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: normalize(20, 'width'),
  },
  greetingSubText2: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '500',
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
  GetStartedContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: normalize(10, 'height'),
  },
});
