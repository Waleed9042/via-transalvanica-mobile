import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabViewContainer from '../components/navigation/TabViewContainer';

const RegionsScreen = props => {
  return (
    <View style={styles.MainViewContainer}>
      <View style={styles.ScrollViewContainer}>
        <TabViewContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainViewContainer: {
    flex: 1,
  },
  ScrollViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EF7D21',
  },
});

export default RegionsScreen;
