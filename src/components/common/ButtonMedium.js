import React from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import normalize from 'react-native-normalize';

export default function ButtonMedium(props) {
  const styles = {
    ButtonRow: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    ButtonMedium: {
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: props.color,
      height: normalize(45, 'width'),
      width: normalize(320, 'width'),
      borderRadius: normalize(5, 'width'),
      marginBottom: normalize(30, 'width'),
    },
    ButtonIconStyle: {
      padding: normalize(10, 'width'),
      margin: normalize(5, 'width'),
      height: normalize(20, 'width'),
      width: normalize(20, 'width'),
      resizeMode: 'stretch',
    },
    TextStyle: {
      color: props.textColor ? props.textColor : '#fff',
      fontWeight: 'bold',
      fontSize: normalize(15, 'width'),
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <View style={styles.ButtonRow}>
      <TouchableOpacity
        style={styles.ButtonMedium}
        activeOpacity={0.5}
        onPress={props.onPressAction}
        disabled={props.disabled}>
        <View style={styles.textContainer}>
          {!props.disabled ? (
            <Text style={styles.TextStyle}>{props.buttonText}</Text>
          ) : (
            <ActivityIndicator animating={true} size="small" color="#ffffff" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
