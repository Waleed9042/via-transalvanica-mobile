import React from 'react';
import {View, StyleSheet} from 'react-native';
import RegionTabViewContainer from '../components/navigation/RegionTabViewContainer';
import {useNavigation} from '@react-navigation/native';

const RegionDetail = props => {
  const navigation = useNavigation();
  const {regionName} = props && props.route.params;
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: regionName,
    });
  }, [regionName]);
  return (
    <View style={styles.MainViewContainer}>
      <View style={styles.ScrollViewContainer}>
        <RegionTabViewContainer />
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

export default RegionDetail;
