import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export default function TabBarIcon(props) {
  return (
    <View style={props.focused ? styles.TabIcon : styles.TabIconSelected}>
      {props.name === 'home' &&
        (props.focused ? (
          <Image
            source={require('../assets/images/app-logo.png')}
            style={styles.ImageCardProduct}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('../assets/images/app-logo.png')}
            style={styles.ImageCardProduct}
            resizeMode="contain"
          />
        ))}
      {props.name === 'store' &&
        (props.focused ? (
          <Image
            source={require('../assets/images/app-logo.png')}
            style={styles.ImageCardProduct}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('../assets/images/app-logo.png')}
            style={styles.ImageCardProduct}
            resizeMode="contain"
          />
        ))}
      {props.name === 'orders' &&
        (props.focused ? (
          <Image
            source={require('../assets/images/app-logo.png')}
            style={styles.ImageCardProduct}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('../assets/images/app-logo.png')}
            style={styles.ImageCardProduct}
            resizeMode="contain"
          />
        ))}
      {props.name === 'queries' &&
        (props.focused ? (
          <Image
            source={require('../assets/images/app-logo.png')}
            style={styles.ImageCardProduct}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('../assets/images/app-logo.png')}
            style={styles.ImageCardProduct}
            resizeMode="contain"
          />
        ))}
    </View>
  );
}
const styles = StyleSheet.create({
  ImageCardProduct: {
    height: normalize(22, 'width'),
  },
  TabIcon: {
    backgroundColor: '#018bff',
    width: normalize(40, 'width'),
    height: normalize(40, 'width'),
    borderRadius: normalize(50, 'width'),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#018bff',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.75,
    shadowRadius: 12,
    elevation: 10,
  },
  TabIconSelected: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: normalize(40, 'width'),
    height: normalize(40, 'width'),
    borderRadius: normalize(50, 'width'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
