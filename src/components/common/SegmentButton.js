import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import normalize from 'react-native-normalize';

const SegmentButton = ({setStage, stage}) => {
  const {startPoint, endPoint} = stage;
  const navigation = useNavigation();
  const handleButtonClick = () => {
    setStage(stage);
    navigation.replace('Direction');
  };
  return (
    <TouchableOpacity
      style={styles.skipButtonContainer}
      activeOpacity={0.5}
      onPress={handleButtonClick}>
      <View
        style={{
          width: '100%',
          height: normalize(40, 'height'),
          borderRadius: 20,
        }}>
        <Text
          style={
            styles.regionName
          }>{`${startPoint.name} - ${endPoint.name}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skipButtonContainer: {
    padding: normalize(10, 'width'),
    margin: normalize(10, 'width'),
    borderRadius: 10,
    backgroundColor: '#EF7D21',
  },
  regionName: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: normalize(15, 'width'),
  },
});

export default SegmentButton;
