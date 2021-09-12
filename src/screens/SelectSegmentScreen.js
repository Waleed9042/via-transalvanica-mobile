import React from 'react';
import {get, isEmpty} from 'lodash';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import normalize from 'react-native-normalize';
import SegmentButton from '../components/common/SegmentButton';
import {setStage} from '../redux/actions';

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

const SelectSegmentScreen = props => {
  const stages = getStages(props.selectedRegion);
  return (
    <View style={styles.MainViewContainer}>
      <View style={styles.ScrollViewContainer}>
        <View style={styles.customTextContainer}>
          <Text style={styles.mainText}>Select Segment</Text>
          <Text style={styles.subText}>
            Choosing a starting point in your journey will help you define the
            plans for your next adventure. ( 1 segment = 1 day)
          </Text>
        </View>
        <View style={styles.regionsContainer}>
          <ScrollView>
            {!isEmpty(stages) &&
              stages.map((stage, index) => {
                return (
                  <SegmentButton
                    key={index}
                    stage={stage}
                    setStage={props.setSelectedStage}
                  />
                );
              })}
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
    setSelectedStage: value => dispatch(setStage(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectSegmentScreen);
