import React from 'react';
import {isEmpty} from 'lodash';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import normalize from 'react-native-normalize';
import {setRegion} from '../redux/actions';
import RegionButton from '../components/common/RegionButton';

const RegionSelectScreen = props => {
  const {
    regions = [
      {name: 'Bucovina'},
      {name: 'Highland'},
      {name: 'Terra Siculorum'},
      {name: 'Terra Saxonum'},
      {name: 'Terra Banatica'},
    ],
  } = props;

  return (
    <View style={styles.MainViewContainer}>
      <View style={styles.ScrollViewContainer}>
        <View style={styles.customTextContainer}>
          <Text style={styles.mainText}>Select Region</Text>
          <Text style={styles.subText}>
            There must be a specific region on Via TransalVanica that you have
            in your mind ...
          </Text>
        </View>
        <View style={styles.regionsContainer}>
          {!isEmpty(regions) &&
            regions.map((region, index) => {
              return (
                <RegionButton
                  key={index}
                  name={region.name}
                  setRegion={props && props.setSelectedRegion}
                />
              );
            })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainViewContainer: {
    flex: 1,
    backgroundColor: '#EF7D21',
  },
  ScrollViewContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: normalize(100, 'width'),
    backgroundColor: '#ffffff',
  },
  customTextContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: normalize(40, 'width'),
  },
  mainText: {
    fontSize: normalize(14, 'width'),
    textAlign: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: normalize(12, 'width'),
    paddingTop: normalize(10, 'width'),
    color: '#8C8C8C',
    width: normalize(200, 'width'),
    fontWeight: 'bold',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    setSelectedRegion: value => dispatch(setRegion(value)),
  };
};

export default connect(null, mapDispatchToProps)(RegionSelectScreen);
