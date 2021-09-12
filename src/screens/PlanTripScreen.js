import React from 'react';
import {isEmpty} from 'lodash';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import normalize from 'react-native-normalize';
import ButtonMedium from '../components/common/ButtonMedium';
import TripCard from '../components/common/TripCard';
import {fetchAllTrips} from '../services/dataServices';

const PlanTripScreen = props => {
  const [trips, setTrips] = React.useState([]);
  React.useEffect(() => {
    async function fetch() {
      const res = await fetchAllTrips();
      if (!res.data.success) {
        setTrips([]);
      } else {
        setTrips(res.data.trips);
      }
    }
    fetch();
  }, []);

  return (
    <View style={styles.MainViewContainer}>
      <View style={styles.planTripTextContainer}>
        <Text style={styles.planTripText}>Plan Your Trip</Text>
      </View>
      <View style={styles.ScrollViewContainer}>
        <View style={styles.customTextContainer}>
          <Text style={styles.mainText}>Customize your trip</Text>
          <Text style={styles.subText}>
            Start planning your next trip on Via Transalvanica Trail
          </Text>
        </View>
        <View style={styles.tripButton}>
          <ButtonMedium
            color="#EF7D21"
            textColor="#ffffff"
            buttonText="Create New Trip"
            onPressAction={() => props.navigation.navigate('RegionSelect')}
          />
        </View>
        {!isEmpty(trips) ? (
          <View style={styles.tripsContainer}>
            <View>
              <Text style={styles.upcomingTripText}>Upcoming Trips</Text>
              <ScrollView>
                {trips &&
                  trips.map((trip, idx) => {
                    return <TripCard key={idx} trip={!isEmpty(trip) && trip} />;
                  })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.noTripsContainer}>
              <Image
                source={require('../assets/images/noTrip.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <View style={{textAlign: 'center'}}>
              <Text style={styles.noTripsText}>You have no upcoming trips</Text>
              <Text style={styles.noTripsTextBottom}>
                When you will create a new trip we will display at here so you
                can easily find it here
              </Text>
            </View>
          </View>
        )}
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
    marginTop: normalize(135, 'width'),
    backgroundColor: '#ffffff',
  },
  customTextContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: normalize(30, 'width'),
  },
  mainText: {
    fontSize: normalize(14, 'width'),
    textAlign: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: normalize(14, 'width'),
    paddingTop: normalize(10, 'width'),
    color: '#8C8C8C',
    width: normalize(200, 'width'),
    fontWeight: 'bold',
  },
  tripButton: {
    paddingTop: normalize(60, 'width'),
  },
  tripsContainer: {
    paddingTop: normalize(40, 'width'),
  },
  upcomingTripText: {
    paddingLeft: normalize(10, 'width'),
  },
  noTripsText: {
    textAlign: 'center',
    paddingTop: normalize(20, 'width'),
    fontWeight: 'bold',
    fontSize: normalize(15, 'width'),
  },
  noTripsTextBottom: {
    textAlign: 'center',
    padding: normalize(15, 'width'),
    fontSize: normalize(10, 'width'),
    color: '#8C8C8C',
    fontWeight: 'bold',
  },
  noTripsContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: normalize(40, 'width'),
    paddingBottom: normalize(40, 'width'),
  },
  planTripTextContainer: {
    position: 'absolute',
    paddingTop: normalize(50, 'width'),
    paddingLeft: normalize(10, 'width'),
  },
  planTripText: {
    marginTop: normalize(35, 'width'),
    color: '#ffffff',
    fontSize: normalize(35, 'width'),
  },
});

export default PlanTripScreen;
