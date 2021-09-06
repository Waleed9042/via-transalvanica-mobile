import React from 'react';
import {get} from 'lodash';
import {View, StyleSheet, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import normalize from 'react-native-normalize';
import {useNavigation} from '@react-navigation/native';
import DirectionToggle from '../components/common/DirectionToggle';
import ButtonMedium from '../components/common/ButtonMedium';
import {setDirection} from '../redux/actions';

const DirectionScreen = ({stage, setSelectedDirection}) => {
  const navigation = useNavigation();
  const {startPoint, endPoint} = stage;
  const [northToggle, setNorthToggle] = React.useState(false);
  const [southToggle, setSouthToggle] = React.useState(false);

  const handlePress = () => {
    if (northToggle && southToggle) {
      alert('please select on direction only.');
      return;
    }
    if (northToggle) {
      setSelectedDirection('N');
      navigation.replace('Date');
    } else {
      setSelectedDirection('S');
      navigation.replace('Date');
    }
  };

  return (
    <View style={styles.MainViewContainer}>
      <View style={styles.ScrollViewContainer}>
        <View style={styles.customTextContainer}>
          <Text style={styles.mainText}>
            Select The Direction you want to go
          </Text>
          <Text style={styles.subText}>
            {`Either you want to go North, towards ${
              endPoint.name || ''
            } , or South, towards ${startPoint.name || ''}, it's your choice`}
          </Text>
        </View>
        <View style={styles.regionsContainer}>
          <DirectionToggle
            direction="N"
            toggle={northToggle}
            handleToggle={setNorthToggle}
          />
          <Image
            source={require('../assets/images/compass-1.png')}
            style={styles.ImageCardProduct}
            resizeMode="contain"
          />
          <DirectionToggle
            direction="S"
            toggle={southToggle}
            handleToggle={setSouthToggle}
          />
          <View style={{paddingTop: normalize(20, 'height')}}>
            <ButtonMedium
              buttonText="Continue"
              color="#EF7D21"
              textColor="#ffffff"
              onPressAction={handlePress}
            />
          </View>
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
  regionsContainer: {
    padding: normalize(30, 'width'),
  },
  ImageCardProduct: {
    textAlign: 'center',
    alignSelf: 'center',
    padding: normalize(30, 'width'),
  },
});

const mapStateToProps = state => {
  return {
    stage: get(state, 'appState.selectedStage', ''),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedDirection: value => dispatch(setDirection(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectionScreen);
