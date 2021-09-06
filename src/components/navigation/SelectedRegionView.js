import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import normalize from 'react-native-normalize';
import MapViewDirections from 'react-native-maps-directions';

const SelectedRegionView = ({api, initialRegion, stages, hideMap}) => {
  const handlePress = () => {
    hideMap(false);
  };
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
              paddingTop: normalize(45, 'width'),
            }}
            onPress={handlePress}
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
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
        {stages &&
          stages.map(stage => {
            if (stage.index % 2 === 0) {
              return (
                <MapViewDirections
                  key={stage.index}
                  origin={{
                    longitude: stage.startPoint.longitude,
                    latitude: stage.startPoint.latitude,
                  }}
                  destination={{
                    longitude: stage.endPoint.longitude,
                    latitude: stage.endPoint.latitude,
                  }}
                  apikey={api}
                  strokeWidth={5}
                  strokeColor="#EF7D21"
                />
              );
            } else {
              return (
                <MapViewDirections
                  key={stage.index}
                  origin={{
                    longitude: stage.startPoint.longitude,
                    latitude: stage.startPoint.latitude,
                  }}
                  destination={{
                    longitude: stage.endPoint.longitude,
                    latitude: stage.endPoint.latitude,
                  }}
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

export default SelectedRegionView;
