import React from 'react';
import {get} from 'lodash';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import normalize from 'react-native-normalize';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';
import {setStartDate, setEndDate} from '../redux/actions';
import ButtonMedium from '../components/common/ButtonMedium';

const DateScreen = props => {
  const navigation = useNavigation();
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [showDatePickerStart, setShowDatePickerStart] = React.useState(false);
  const [showDatePickerEnd, setShowDatePickerEnd] = React.useState(false);

  const handlePress = () => {
    props.setStart(startDate);
    props.setEnd(endDate);
    navigation.replace('EditTrip');
  };
  return (
    <View style={styles.MainViewContainer}>
      <View style={styles.ScrollViewContainer}>
        <View style={styles.customTextContainer}>
          <Text style={styles.mainText}>Start and End Date for your trip</Text>
          <Text style={styles.subText}>
            Please pick a starting date and the ending date for the trip you are
            planning.
          </Text>
        </View>
        <View style={styles.regionsContainer}>
          <ScrollView>
            <View style={{borderColor: '#000000'}}>
              <ButtonMedium
                buttonText={
                  !showDatePickerEnd
                    ? `Selecting a Starting Date`
                    : `${startDate}`
                }
                color="#EF7D21"
                textColor="#ffffff"
                onPressAction={() => {
                  setShowDatePickerEnd(false);
                  setShowDatePickerStart(true);
                }}
              />
              {showDatePickerStart && (
                <DatePicker
                  mode="date"
                  date={startDate}
                  onDateChange={setStartDate}
                />
              )}
            </View>
            <ButtonMedium
              buttonText={
                !showDatePickerStart ? `Selecting a Ending Date` : `${endDate}`
              }
              color="#EF7D21"
              textColor="#ffffff"
              onPressAction={() => {
                setShowDatePickerEnd(true);
                setShowDatePickerStart(false);
              }}
            />
            {showDatePickerEnd && (
              <DatePicker
                mode="date"
                date={endDate}
                onDateChange={setEndDate}
              />
            )}
            <View style={{paddingTop: normalize(80, 'height')}}>
              <ButtonMedium
                buttonText="Continue"
                color="#EF7D21"
                textColor="#ffffff"
                onPressAction={handlePress}
              />
            </View>
          </ScrollView>
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
    padding: normalize(20, 'width'),
    height: normalize(450, 'height'),
  },
});

const mapStateToProps = state => {
  return {
    selectedRegion: get(state, 'appState.selectedRegion', ''),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStart: value => dispatch(setStartDate(value)),
    setEnd: value => dispatch(setEndDate(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateScreen);
