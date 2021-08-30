import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import normalize from 'react-native-normalize';
import MapViewDirections from 'react-native-maps-directions';

const SingleRegionView = ({api, initialRegion, stages}) => {
  const navigation = useNavigation();
  return (
    <View>
      <MapView
        initialRegion={initialRegion}
        zoomEnabled={true}
        style={{height: '100%'}}>
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              fontSize: normalize(15, 'width'),
              paddingLeft: normalize(15, 'width'),
              paddingTop: normalize(15, 'width'),
            }}
            onPress={() => navigation && navigation.navigate('RegionDetails')}
            loading>
            <Text
              style={{
                color: '#ffffff',
                backgroundColor: '#EF7D21',
                width: normalize(70, 'width'),
                textAlign: 'center',
                padding: normalize(5, 'width'),
                borderRadius: 20,
              }}>
              Details
            </Text>
          </TouchableOpacity>
        </View>
        {stages &&
          stages.map(stage => {
            if (stage.index % 2 === 0) {
              return (
                <MapViewDirections
                  key={stage.index}
                  origin={stage.origin}
                  destination={stage.destination}
                  apikey={api}
                  strokeWidth={5}
                  strokeColor="#EF7D21"
                />
              );
            } else {
              return (
                <MapViewDirections
                  key={stage.index}
                  origin={stage.origin}
                  destination={stage.destination}
                  apikey={api}
                  strokeWidth={5}
                  strokeColor="#000000"
                />
              );
            }
          })}
      </MapView>
    </View>
  );
};

export default SingleRegionView;
