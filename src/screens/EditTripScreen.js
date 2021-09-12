import React from 'react';
import {get} from 'lodash';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import normalize from 'react-native-normalize';
import {useNavigation} from '@react-navigation/native';
import {setDescription, setName} from '../redux/actions';
import ButtonMedium from '../components/common/ButtonMedium';
import SelectedRegionView from '../components/navigation/SelectedRegionView';
import {createTrip} from '../services/dataServices';

const getInitialRegion = name => {
  switch (name) {
    case 'Bucovina':
      return {
        longitude: 25.6124778,
        latitude: 47.734454,
        latitudeDelta: 1,
        longitudeDelta: 1,
      };
    case 'Highland':
      return {
        longitude: 24.749245,
        latitude: 47.084548,
        latitudeDelta: 6,
        longitudeDelta: 4,
      };
    case 'Terra Siculorum':
      return {
        longitude: 25.145398,
        latitude: 46.456393,
        latitudeDelta: 1,
        longitudeDelta: 1,
      };
    case 'Terra Saxonum':
      return {
        longitude: 24.574994,
        latitude: 46.212305,
        latitudeDelta: 4,
        longitudeDelta: 6,
      };
    case 'Terra Banatica':
      return {
        longitude: 22.629723,
        latitude: 45.856905,
        latitudeDelta: 6,
        longitudeDelta: 4,
      };
    default:
      break;
  }
};

const getStages = region => {
  switch (region) {
    case 'Bucovina':
      return [
        {
          startPoint: {
            name: 'Putna',
            longitude: '25.6124778',
            latitude: '47.8707655',
            elevation: '542',
          },
          endPoint: {
            name: 'Sucevița',
            longitude: '25.7200274',
            latitude: '47.7804784',
            elevation: '541',
          },
          index: 0,
        },
        {
          startPoint: {
            name: 'Sucevița',
            longitude: '25.7200274',
            latitude: '47.7804784',
            elevation: '541',
          },
          endPoint: {
            name: 'Vatra Moldoviței',
            longitude: '25.5731342',
            latitude: '47.6524987',
            elevation: '621',
          },
          index: 1,
        },
        {
          startPoint: {
            name: 'Vatra Moldoviței',
            longitude: '25.5731342',
            latitude: '47.6524987',
            elevation: '621',
          },
          endPoint: {
            name: 'Sadova',
            longitude: '25.5037958',
            latitude: '47.5424818',
            elevation: '674',
          },
          index: 3,
        },
        {
          startPoint: {
            name: 'Sadova',
            longitude: '25.5037958',
            latitude: '47.5424818',
            elevation: '674',
          },
          endPoint: {
            name: 'Pasul Mestecăniș',
            longitude: '25.3468941',
            latitude: '47.4642053',
            elevation: '1090',
          },
          index: 4,
        },
        {
          startPoint: {
            name: 'Pasul Mestecăniș',
            longitude: '25.3468941',
            latitude: '47.4642053',
            elevation: '1090',
          },
          endPoint: {
            name: 'Vatra Dornei',
            longitude: '25.3557638',
            latitude: '47.3469264',
            elevation: '795',
          },
          index: 5,
        },
        {
          startPoint: {
            name: 'Vatra Dornei',
            longitude: '25.3557638',
            latitude: '47.3469264',
            elevation: '795',
          },
          endPoint: {
            name: 'Poiana Negri',
            longitude: '25.220783',
            latitude: '47.3220651',
            elevation: '887',
          },
          index: 6,
        },
      ];
    case 'Highland':
      return [
        {
          startPoint: {
            name: 'Poiana Negri',
            longitude: '25.220783',
            latitude: '47.3220651',
            elevation: '887',
          },
          endPoint: {
            name: 'Lunca Ilvei',
            longitude: '24.9712846',
            latitude: '47.3646739',
            elevation: '679',
          },
          index: 0,
        },
        {
          startPoint: {
            name: 'Lunca Ilvei',
            longitude: '24.9712846',
            latitude: '47.3646739',
            elevation: '679',
          },
          endPoint: {
            name: 'Tășuleasa Social',
            longitude: '24.9796808',
            latitude: '47.2475935',
            elevation: '1028',
          },
          index: 1,
        },
        {
          startPoint: {
            name: 'Tășuleasa Social',
            longitude: '24.9796808',
            latitude: '47.2475935',
            elevation: '1028',
          },
          endPoint: {
            name: 'Bistrița Bârgăului',
            longitude: '24.7618089',
            latitude: '47.2086299',
            elevation: '530',
          },
          index: 2,
        },
        {
          startPoint: {
            name: 'Bistrița Bârgăului',
            longitude: '24.7618089',
            latitude: '47.2086299',
            elevation: '530',
          },
          endPoint: {
            name: 'Petriș',
            longitude: '22.3912732',
            latitude: '46.0428007',
            elevation: '175',
          },
          index: 3,
        },
        {
          startPoint: {
            name: 'Petriș',
            longitude: '22.3912732',
            latitude: '46.0428007',
            elevation: '175',
          },
          endPoint: {
            name: 'Jeica',
            longitude: '24.5044778',
            latitude: '46.9798295',
            elevation: '395',
          },
          index: 4,
        },
        {
          startPoint: {
            name: 'Jeica',
            longitude: '24.5044778',
            latitude: '46.9798295',
            elevation: '395',
          },
          endPoint: {
            name: 'Monor',
            longitude: '24.6920623',
            latitude: '46.9500762',
            elevation: '542',
          },
          index: 5,
        },
        {
          startPoint: {
            name: 'Monor',
            longitude: '24.6920623',
            latitude: '46.9500762',
            elevation: '542',
          },
          endPoint: {
            name: 'Brâncovenești',
            longitude: '24.7613032',
            latitude: '46.8571245',
            elevation: '395',
          },
          index: 6,
        },
        {
          startPoint: {
            name: 'Brâncovenești',
            longitude: '24.7613032',
            latitude: '46.8571245',
            elevation: '395',
          },
          endPoint: {
            name: 'Cașva',
            longitude: '24.8778804',
            latitude: '46.7819356',
            elevation: '434',
          },
          index: 7,
        },
        {
          startPoint: {
            name: 'Cașva',
            longitude: '24.8778804',
            latitude: '46.7819356',
            elevation: '434',
          },
          endPoint: {
            name: 'Brădețel',
            longitude: '23.0627761',
            latitude: '44.8828855',
            elevation: '265',
          },
          index: 8,
        },
        {
          startPoint: {
            name: 'Brădețel',
            longitude: '23.0627761',
            latitude: '44.8828855',
            elevation: '265',
          },
          endPoint: {
            name: 'Câmpu Cetății',
            longitude: '25.0139733',
            latitude: '46.6704272',
            elevation: '604',
          },
          index: 9,
        },
      ];
    case 'Terra Siculorum':
      return [
        {
          startPoint: {
            name: 'Câmpu Cetății',
            longitude: '25.0139733',
            latitude: '46.6704272',
            elevation: '604',
          },
          endPoint: {
            name: 'Sovata',
            longitude: '25.11363880366445',
            latitude: '46.6335331',
            elevation: '835',
          },
          index: 0,
        },
        {
          startPoint: {
            name: 'Sovata',
            longitude: '25.11363880366445',
            latitude: '46.6335331',
            elevation: '835',
          },
          endPoint: {
            name: 'Praid',
            longitude: '25.1245222',
            latitude: '46.5529119',
            elevation: '498',
          },
          index: 1,
        },
        {
          startPoint: {
            name: 'Praid',
            longitude: '25.1245222',
            latitude: '46.5529119',
            elevation: '498',
          },
          endPoint: {
            name: 'Atia',
            longitude: '25.12963',
            latitude: '46.4867673',
            elevation: '741',
          },
          index: 2,
        },
        {
          startPoint: {
            name: 'Atia',
            longitude: '25.12963',
            latitude: '46.4867673',
            elevation: '741',
          },
          endPoint: {
            name: 'Lupeni',
            longitude: '25.2240504',
            latitude: '46.3800795',
            elevation: '559',
          },
          index: 3,
        },
        {
          startPoint: {
            name: 'Lupeni',
            longitude: '25.2240504',
            latitude: '46.3800795',
            elevation: '559',
          },
          endPoint: {
            name: 'Odorheiu Secuiesc',
            longitude: '25.2950261',
            latitude: '46.3047462',
            elevation: '479',
          },
          index: 4,
        },
        {
          startPoint: {
            name: 'Odorheiu Secuiesc',
            longitude: '25.2950261',
            latitude: '46.3047462',
            elevation: '479',
          },
          endPoint: {
            name: 'Mărtiniș',
            longitude: '25.3908976',
            latitude: '46.2328028',
            elevation: '498',
          },
          index: 5,
        },
        {
          startPoint: {
            name: 'Mărtiniș',
            longitude: '25.3908976',
            latitude: '46.2328028',
            elevation: '498',
          },
          endPoint: {
            name: 'Dârjiu',
            longitude: '46.2007316',
            latitude: '25.1988858',
            elevation: '559',
          },
          index: 6,
        },
        {
          startPoint: {
            name: 'Dârjiu',
            longitude: '46.2007316',
            latitude: '25.1988858',
            elevation: '559',
          },
          endPoint: {
            name: 'Archita',
            longitude: '46.1806876',
            latitude: '25.087223',
            elevation: '467',
          },
          index: 7,
        },
      ];
    case 'Terra Saxonum':
      return [
        {
          startPoint: {
            name: 'Archita',
            longitude: '46.1806876',
            latitude: '25.087223',
            elevation: '467',
          },
          endPoint: {
            name: 'Criț',
            longitude: '25.0189962',
            latitude: '46.122147',
            elevation: '475',
          },
          index: 0,
        },
        {
          startPoint: {
            name: 'Criț',
            longitude: '25.0189962',
            latitude: '46.122147',
            elevation: '475',
          },
          endPoint: {
            name: 'Saschiz',
            longitude: '24.961897',
            latitude: '46.1941249',
            elevation: '413',
          },
          index: 1,
        },
        {
          startPoint: {
            name: 'Saschiz',
            longitude: '24.961897',
            latitude: '46.1941249',
            elevation: '413',
          },
          endPoint: {
            name: 'Șapartoc',
            longitude: '24.8564329',
            latitude: '46.1721191',
            elevation: '527',
          },
          index: 2,
        },
        {
          startPoint: {
            name: 'Șapartoc',
            longitude: '24.8564329',
            latitude: '46.1721191',
            elevation: '527',
          },
          endPoint: {
            name: 'Stejărenii',
            longitude: '24.7224475',
            latitude: '46.152866',
            elevation: '414',
          },
        },
        {
          startPoint: {
            name: 'Mălâncrav',
            longitude: '24.6484435',
            latitude: '46.1111535',
            elevation: '427',
          },
          endPoint: {
            name: 'Biertan',
            longitude: '24.5209582',
            latitude: '46.1363072',
            elevation: '381',
          },
        },
        {
          startPoint: {
            name: 'Biertan',
            longitude: '24.5209582',
            latitude: '46.1363072',
            elevation: '381',
          },
          endPoint: {
            name: 'Mediaș',
            longitude: '24.3473855',
            latitude: '46.1625212',
            elevation: '293',
          },
        },
        {
          startPoint: {
            name: 'Mediaș',
            longitude: '24.3473855',
            latitude: '46.1625212',
            elevation: '293',
          },
          endPoint: {
            name: 'Bazna',
            longitude: '24.2834268',
            latitude: '46.2006511',
            elevation: '305',
          },
        },
        {
          startPoint: {
            name: 'Bazna',
            longitude: '24.2834268',
            latitude: '46.2006511',
            elevation: '305',
          },
          endPoint: {
            name: 'Axente Sever',
            longitude: '24.2161435',
            latitude: '46.0935391',
            elevation: '300',
          },
        },
        {
          startPoint: {
            name: 'Axente Sever',
            longitude: '24.2161435',
            latitude: '46.0935391',
            elevation: '300',
          },
          endPoint: {
            name: 'Micăsasa',
            longitude: '24.1089357',
            latitude: '46.0872685',
            elevation: '282',
          },
        },
      ];
    case 'Terra Banatica':
      return [
        {
          startPoint: {
            name: 'Bucova',
            longitude: '22.6373084',
            latitude: '45.509062',
            elevation: '579',
          },
          endPoint: {
            name: 'Marga',
            longitude: '22.5185442',
            latitude: '45.5030229',
            elevation: '455',
          },
        },
        {
          startPoint: {
            name: 'Marga',
            longitude: '22.5185442',
            latitude: '45.5030229',
            elevation: '455',
          },
          endPoint: {
            name: 'Oțelu Roșu',
            longitude: '22.3577418',
            latitude: '45.5198288',
            elevation: '266',
          },
        },
        {
          startPoint: {
            name: 'Oțelu Roșu',
            longitude: '22.3577418',
            latitude: '45.5198288',
            elevation: '266',
          },
          endPoint: {
            name: 'Caransebeș',
            longitude: '22.2182232',
            latitude: '45.4106108',
            elevation: '209',
          },
        },
        {
          startPoint: {
            name: 'Caransebeș',
            longitude: '22.2182232',
            latitude: '45.4106108',
            elevation: '209',
          },
          endPoint: {
            name: 'Poiana',
            longitude: '23.1043343',
            latitude: '46.4395773',
            elevation: '994',
          },
        },
        {
          startPoint: {
            name: 'Poiana',
            longitude: '23.1043343',
            latitude: '46.4395773',
            elevation: '994',
          },
          endPoint: {
            name: 'Gărâna',
            longitude: '22.0973564',
            latitude: '45.2277578',
            elevation: '937',
          },
        },
        {
          startPoint: {
            name: 'Gărâna',
            longitude: '22.0973564',
            latitude: '45.2277578',
            elevation: '937',
          },
          endPoint: {
            name: 'Secu',
            longitude: '21.9794344',
            latitude: '45.2699807',
            elevation: '444',
          },
        },
        {
          startPoint: {
            name: 'Secu',
            longitude: '21.9794344',
            latitude: '45.2699807',
            elevation: '444',
          },
          endPoint: {
            name: 'Reșița',
            longitude: '21.8877676',
            latitude: '45.2890106',
            elevation: '230',
          },
        },
        {
          startPoint: {
            name: 'Reșița',
            longitude: '21.8877676',
            latitude: '45.2890106',
            elevation: '230',
          },
          endPoint: {
            name: 'Iabalcea',
            longitude: '21.9163651',
            latitude: '45.2184245',
            elevation: '479',
          },
        },
        {
          startPoint: {
            name: 'Iabalcea',
            longitude: '21.9163651',
            latitude: '45.2184245',
            elevation: '479',
          },
          endPoint: {
            name: 'Canton Coșava',
            longitude: '22.0595748',
            latitude: '45.0570543',
            elevation: '637',
          },
        },
        {
          startPoint: {
            name: 'Canton Coșava',
            longitude: '22.0595748',
            latitude: '45.0570543',
            elevation: '637',
          },
          endPoint: {
            name: 'Prigor',
            longitude: '22.1135222',
            latitude: '44.9272454',
            elevation: '293',
          },
        },
        {
          startPoint: {
            name: 'Prigor',
            longitude: '22.1135222',
            latitude: '44.9272454',
            elevation: '293',
          },
          endPoint: {
            name: 'Crușovăț',
            longitude: '22.3206096',
            latitude: '44.9967621',
            elevation: '273',
          },
        },
        {
          startPoint: {
            name: 'Crușovăț',
            longitude: '22.3206096',
            latitude: '44.9967621',
            elevation: '273',
          },
          endPoint: {
            name: 'Prisacina',
            longitude: '22.4850334',
            latitude: '45.015875',
            elevation: '800',
          },
        },
        {
          startPoint: {
            name: 'Prisacina',
            longitude: '22.4850334',
            latitude: '45.015875',
            elevation: '800',
          },
          endPoint: {
            name: 'Valea Cernei',
            longitude: '22.588884785581715',
            latitude: '45.055384000000004',
            elevation: '571',
          },
        },
      ];
    default:
      break;
  }
};

const EditTripScreen = props => {
  const {
    startDate,
    selectedStage,
    selectedRegion,
    userId,
    endDate,
    selectedDirection,
  } = props;
  const {startPoint, endPoint} = selectedStage;
  const navigation = useNavigation();
  const [showMap, setShowMap] = React.useState(false);
  const [tripName, setTripName] = React.useState('Un-named Trip');
  const [description, setDescription] = React.useState(
    'You can add description of your trip here.',
  );

  const handleMapShow = () => {
    setShowMap(!showMap);
  };

  const handlePress = async () => {
    if (tripName === '' || description === '') {
      return;
    }
    props.setTripDescription(description);
    props.setTripName(tripName);
    const reqObj = {
      userId: userId,
      region: {
        stage: selectedStage,
        name: tripName,
        description: description,
      },
      startPoint: startPoint && startPoint.name,
      endPoint: endPoint && endPoint.name,
      startDate: startDate || Date.now(),
      endDate: endDate || Date.now(),
      direction: selectedDirection === 'S' ? 'South' : 'North',
    };
    const tripResp = await createTrip(reqObj);
    if (tripResp && !tripResp.data.success) {
      navigation.replace('TripCreated', {error: true});
    } else {
      navigation.replace('TripCreated', {error: false});
    }
  };
  return (
    <View style={styles.MainViewContainer}>
      {showMap ? (
        <View>
          <SelectedRegionView
            api={'AIzaSyAMiRI2PUkcZniwqKXrU6bKX1ekWO5aEE8'}
            initialRegion={getInitialRegion(selectedRegion)}
            stages={getStages(selectedRegion)}
            hideMap={setShowMap}
          />
        </View>
      ) : (
        <View>
          <View style={styles.ImageContainer}>
            <ImageBackground
              source={require('../assets/images/region-image-1.png')}
              style={styles.image}
              resizeMode={'cover'}>
              <Text style={styles.tapText}>Tap to Change Photo</Text>
              <View style={styles.mapButton}>
                <TouchableOpacity onPress={handleMapShow}>
                  <Text style={styles.mapShowText}>Show Map</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.detailsContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingTop: normalize(20, 'height'),
              }}>
              <Image
                source={require('../assets/images/icon-pencil.png')}
                style={styles.imageIcon}
                resizeMode={'cover'}
              />
              <TextInput
                value={tripName}
                style={styles.InputStyle}
                onChangeText={text => setTripName(text)}
                keyboardType="phone-pad"
                maxLength={15}
              />
            </View>
            <View style={{padding: 10}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.label}>Start Date:</Text>
                <Text style={styles.value}>{`${startDate}`}</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.label}>Distance:</Text>
                <Text style={styles.value}>876m</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.label}>Starting Point:</Text>
                <Text style={styles.value}>{startPoint.name}</Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.label}>End Point:</Text>
                <Text style={styles.value}>{endPoint.name}</Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingTop: normalize(20, 'height'),
              }}>
              <Image
                source={require('../assets/images/icon-pencil.png')}
                style={styles.imageIcon}
                resizeMode={'cover'}
              />
              <TextInput
                value={description}
                style={styles.InputStyle1}
                onChangeText={text => setDescription(text)}
                keyboardType="phone-pad"
                maxLength={40}
              />
            </View>
            <View style={{paddingTop: normalize(140, 'height')}}>
              <ButtonMedium
                buttonText="Continue"
                color="#EF7D21"
                textColor="#ffffff"
                onPressAction={handlePress}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  MainViewContainer: {
    flex: 1,
  },
  ImageContainer: {
    height: normalize(200, 'height'),
  },
  label: {
    color: '#8C8C8C',
  },
  value: {
    color: '#000000',
    marginLeft: normalize(5, 'width'),
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
  },
  tapText: {
    textAlign: 'center',
    color: '#fff',
    paddingTop: normalize(100, 'height'),
  },
  mapButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#EF7D21',
    width: normalize(100, 'width'),
    marginTop: normalize(70, 'width'),
    paddingTop: 5,
    paddingBottom: 5,
  },
  mapShowText: {
    color: '#fff',
    textAlign: 'center',
  },
  detailsContainer: {},
  imageIcon: {
    margin: 15,
  },
  InputStyle1: {
    fontSize: normalize(15, 'height'),
    width: normalize(300, 'width'),
  },
  InputStyle: {
    fontSize: normalize(15, 'height'),
    width: normalize(300, 'width'),
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
    startDate: get(state, 'appState.startDate', ''),
    userId: get(state, 'userState.userId', ''),
    endDate: get(state, 'appState.endDate', ''),
    tripNamee: get(state, 'appState.tripName', ''),
    tripDescription: get(state, 'appState.tripDescription', ''),
    selectedDirection: get(state, 'appState.selectedDirection', ''),
    selectedStage: get(state, 'appState.selectedStage', ''),
    selectedRegion: get(state, 'appState.selectedRegion', ''),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTripName: value => dispatch(setName(value)),
    setTripDescription: value => dispatch(setDescription(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTripScreen);
