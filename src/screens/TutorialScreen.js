import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';
import normalize from 'react-native-normalize';

export default function TutorialScreen(props) {
  const images = [
    require('../assets/images/tutorial-bg-1.png'),
    require('../assets/images/tutorial-bg-2.png'),
    require('../assets/images/tutorial-bg-3.png'),
  ];
  const [index, setTextIndex] = useState(0);
  const getText = () => {
    switch (index) {
      case 0:
        return 'Walk on roads that will never cease to surprise you.';
      case 1:
        return 'You will get to know Romania like never before.';
      case 2:
        return 'Return home with your soul filled with peace and beauty.';
    }
  };
  return (
    <View>
      <SliderBox
        images={images}
        sliderBoxHeight={840}
        currentImageEmitter={i => {
          setTextIndex(i);
        }}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/app-logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.tutorialText}>
        <Text style={styles.TextStyle}>{getText()}</Text>
      </View>
      <View style={styles.GetStartedContainer}>
        <TouchableOpacity
          style={styles.GetStartedButton}
          activeOpacity={0.5}
          onPress={() => props.navigation.replace('HomePage')}
          loading>
          <View style={styles.GetStartedButtonContent}>
            <Text style={styles.TextStyle}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: normalize(60, 'width'),
  },
  logoImage: {
    width: normalize(300, 'width'),
    height: normalize(200, 'height'),
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
    fontWeight: '500',
    textAlign: 'center',
    fontSize: normalize(16, 'width'),
  },
  GetStartedContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: normalize(700, 'width'),
  },
  tutorialText: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    width: normalize(300, 'width'),
    marginTop: normalize(600, 'width'),
  },
});
