import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import normalize from 'react-native-normalize';

export function SkipButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.skipButtonContainer}
      activeOpacity={0.5}
      onPress={() => navigation.replace('SkipScreen')}>
      <Text style={styles.skipText}>SKIP</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skipButtonContainer: {
    padding: normalize(10, 'width'),
  },
  skipText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
