import React from 'react';
import {useWindowDimensions} from 'react-native';
import normalize from 'react-native-normalize';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import SingleRegionView from './SingleRegionView';

const Bucovina = [
  {
    origin: {longitude: '25.6124778', latitude: '47.8707655'},
    destination: {longitude: '25.7200274', latitude: '47.7804784'},
    index: 0,
  },
  {
    origin: {longitude: '25.7200274', latitude: '47.7804784'},
    destination: {longitude: '25.5731342', latitude: '47.6524987'},
    index: 1,
  },
  {
    origin: {longitude: '25.5731342', latitude: '47.6524987'},
    destination: {longitude: '25.5037958', latitude: '47.5424818'},
    index: 2,
  },
  {
    origin: {longitude: '25.5037958', latitude: '47.5424818'},
    destination: {longitude: '25.3468941', latitude: '47.4642053'},
    index: 3,
  },
  {
    origin: {longitude: '25.3468941', latitude: '47.4642053'},
    destination: {longitude: '25.3557638', latitude: '47.3469264'},
    index: 4,
  },
  {
    origin: {longitude: '25.3557638', latitude: '47.3469264'},
    destination: {longitude: '25.220783', latitude: '47.3220651'},
    index: 5,
  },
];

const Highland = [
  {
    origin: {longitude: '25.220783', latitude: '47.3220651'},
    destination: {longitude: '24.9712846', latitude: '47.3646739'},
    index: 0,
  },
  {
    origin: {longitude: '24.9712846', latitude: '47.3646739'},
    destination: {longitude: '24.9796808', latitude: '47.2475935'},
    index: 1,
  },
  {
    origin: {longitude: '24.9796808', latitude: '47.2475935'},
    destination: {longitude: '24.7618089', latitude: '47.2086299'},
    index: 2,
  },
  {
    origin: {longitude: '24.7618089', latitude: '47.2086299'},
    destination: {longitude: '22.3912732', latitude: '46.0428007'},
    index: 3,
  },
  {
    origin: {longitude: '22.3912732', latitude: '46.0428007'},
    destination: {longitude: '24.5044778', latitude: '46.9798295'},
    index: 4,
  },
  {
    origin: {longitude: '24.5044778', latitude: '46.9798295'},
    destination: {longitude: '24.6920623', latitude: '46.9500762'},
    index: 5,
  },
  {
    origin: {longitude: '24.6920623', latitude: '46.9500762'},
    destination: {longitude: '24.7613032', latitude: '46.8571245'},
    index: 6,
  },
  {
    origin: {longitude: '24.7613032', latitude: '46.8571245'},
    destination: {longitude: '24.8778804', latitude: '46.7819356'},
    index: 7,
  },
  {
    origin: {longitude: '24.8778804', latitude: '46.7819356'},
    destination: {longitude: '23.0627761', latitude: '44.8828855'},
    index: 8,
  },
  {
    origin: {longitude: '23.0627761', latitude: '44.8828855'},
    destination: {longitude: '25.0139733', latitude: '46.6704272'},
    index: 9,
  },
];

const TerraSiculorum = [
  {
    origin: {longitude: '25.0139733', latitude: '46.6704272'},
    destination: {longitude: '25.11363880366445', latitude: '46.6335331'},
    index: 0,
  },
  {
    origin: {longitude: '25.11363880366445', latitude: '46.6335331'},
    destination: {longitude: '25.1245222', latitude: '46.5529119'},
    index: 1,
  },
  {
    origin: {longitude: '25.1245222', latitude: '46.5529119'},
    destination: {longitude: '25.12963', latitude: '46.4867673'},
    index: 2,
  },
  {
    origin: {longitude: '25.12963', latitude: '46.4867673'},
    destination: {longitude: '25.2240504', latitude: '46.3800795'},
    index: 3,
  },
  {
    origin: {longitude: '25.2240504', latitude: '46.3800795'},
    destination: {longitude: '25.2950261', latitude: '46.3047462'},
    index: 4,
  },
  {
    origin: {longitude: '25.2950261', latitude: '46.3047462'},
    destination: {longitude: '25.3908976', latitude: '46.2328028'},
    index: 5,
  },
  {
    origin: {longitude: '25.3908976', latitude: '46.2328028'},
    destination: {longitude: '25.1988858', latitude: '46.2007316'},
    index: 6,
  },
  {
    origin: {longitude: '24.7613032', latitude: '46.8571245'},
    destination: {longitude: '24.8778804', latitude: '46.7819356'},
    index: 7,
  },
  {
    origin: {longitude: '25.1988858', latitude: '46.2007316'},
    destination: {longitude: '25.087223', latitude: '46.1806876'},
    index: 8,
  },
];

const TerraSaxonum = [
  {
    origin: {longitude: '25.087223', latitude: '46.1806876'},
    destination: {longitude: '25.0189962', latitude: '46.122147'},
    index: 0,
  },
  {
    origin: {longitude: '25.0189962', latitude: '46.122147'},
    destination: {longitude: '24.961897', latitude: '46.1941249'},
    index: 1,
  },
  {
    origin: {longitude: '24.961897', latitude: '46.1941249'},
    destination: {longitude: '22.3577418', latitude: '45.5198288'},
    index: 2,
  },
  {
    origin: {longitude: '22.3577418', latitude: '45.5198288'},
    destination: {longitude: '22.2182232', latitude: '45.4106108'},
    index: 3,
  },
  {
    origin: {longitude: '22.2182232', latitude: '45.4106108'},
    destination: {longitude: '23.1043343', latitude: '46.4395773'},
    index: 4,
  },
  {
    origin: {longitude: '23.1043343', latitude: '46.4395773'},
    destination: {longitude: '22.0973564', latitude: '45.2277578'},
    index: 5,
  },
  {
    origin: {longitude: '22.0973564', latitude: '45.2277578'},
    destination: {longitude: '21.9794344', latitude: '45.2699807'},
    index: 6,
  },
  {
    origin: {longitude: '21.9794344', latitude: '45.2699807'},
    destination: {longitude: '21.8877676', latitude: '45.2890106'},
    index: 7,
  },
  {
    origin: {longitude: '21.8877676', latitude: '45.2890106'},
    destination: {longitude: '21.9163651', latitude: '45.2184245'},
    index: 8,
  },
  {
    origin: {longitude: '21.9163651', latitude: '45.2184245'},
    destination: {longitude: '22.0595748', latitude: '45.0570543'},
    index: 9,
  },
  {
    origin: {longitude: '22.0595748', latitude: '45.0570543'},
    destination: {longitude: '22.1135222', latitude: '44.9272454'},
    index: 10,
  },
  {
    origin: {longitude: '22.1135222', latitude: '44.9272454'},
    destination: {longitude: '22.3206096', latitude: '44.9967621'},
    index: 11,
  },
  {
    origin: {longitude: '22.3206096', latitude: '44.9967621'},
    destination: {longitude: '22.4850334', latitude: '45.015875'},
    index: 12,
  },
  {
    origin: {longitude: '22.4850334', latitude: '45.015875'},
    destination: {
      longitude: '22.588884785581715',
      latitude: '45.055384000000004',
    },
    index: 13,
  },
];

const TerraBanatica = [
  {
    origin: {longitude: '22.6373084', latitude: '45.509062'},
    destination: {longitude: '22.5185442', latitude: '45.5030229'},
    index: 0,
  },
  {
    origin: {longitude: '22.5185442', latitude: '45.5030229'},
    destination: {longitude: '24.961897', latitude: '46.1941249'},
    index: 1,
  },
  {
    origin: {longitude: '24.961897', latitude: '46.1941249'},
    destination: {longitude: '24.8564329', latitude: '46.1721191'},
    index: 2,
  },
  {
    origin: {longitude: '24.8564329', latitude: '46.1721191'},
    destination: {longitude: '24.7224475', latitude: '46.152866'},
    index: 3,
  },
  {
    origin: {longitude: '24.7224475', latitude: '46.152866'},
    destination: {longitude: '24.5209582', latitude: '46.1363072'},
    index: 4,
  },
  {
    origin: {longitude: '24.5209582', latitude: '46.1363072'},
    destination: {longitude: '24.3473855', latitude: '46.1625212'},
    index: 5,
  },
  {
    origin: {longitude: '24.3473855', latitude: '46.1625212'},
    destination: {longitude: '24.2834268', latitude: '46.2006511'},
    index: 6,
  },
  {
    origin: {longitude: '24.2834268', latitude: '46.2006511'},
    destination: {llongitude: '24.2161435', latitude: '46.0935391'},
    index: 7,
  },
  {
    origin: {longitude: '24.2161435', latitude: '46.0935391'},
    destination: {longitude: '24.1089357', latitude: '46.0872685'},
    index: 8,
  },
];

const renderScene = SceneMap({
  first: () => {
    return (
      <SingleRegionView
        initialRegion={{
          longitude: 25.6124778,
          latitude: 47.734454,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        stages={Bucovina}
        name="Bucovina"
        api="AIzaSyAMiRI2PUkcZniwqKXrU6bKX1ekWO5aEE8"
      />
    );
  },
  second: () => {
    return (
      <SingleRegionView
        initialRegion={{
          longitude: 24.749245,
          latitude: 47.084548,
          latitudeDelta: 6,
          longitudeDelta: 4,
        }}
        name="Highland"
        stages={Highland}
        api="AIzaSyAMiRI2PUkcZniwqKXrU6bKX1ekWO5aEE8"
      />
    );
  },
  third: () => {
    return (
      <SingleRegionView
        initialRegion={{
          longitude: 25.145398,
          latitude: 46.456393,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        stages={TerraSiculorum}
        name="Terra Siculorum"
        api="AIzaSyAMiRI2PUkcZniwqKXrU6bKX1ekWO5aEE8"
      />
    );
  },
  fourth: () => {
    return (
      <SingleRegionView
        initialRegion={{
          longitude: 24.574994,
          latitude: 46.212305,
          latitudeDelta: 4,
          longitudeDelta: 6,
        }}
        stages={TerraSaxonum}
        name="Terra Saxonum"
        api="AIzaSyAMiRI2PUkcZniwqKXrU6bKX1ekWO5aEE8"
      />
    );
  },
  fifth: () => {
    return (
      <SingleRegionView
        initialRegion={{
          longitude: 22.629723,
          latitude: 45.856905,
          latitudeDelta: 6,
          longitudeDelta: 4,
        }}
        name="Terra Banatica"
        stages={TerraBanatica}
        api="AIzaSyAMiRI2PUkcZniwqKXrU6bKX1ekWO5aEE8"
      />
    );
  },
});

function TabViewContainer() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Bucovina'},
    {key: 'second', title: 'Highland'},
    {key: 'third', title: 'Terra Siculorum'},
    {key: 'fourth', title: 'Terra Saxonum'},
    {key: 'fifth', title: 'Terra Banatica'},
  ]);
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: 'white'}}
          scrollEnabled={true}
          style={{
            backgroundColor: '#EF7D21',
            position: 'relative',
            marginTop: normalize(100, 'width'),
          }}
        />
      )}
    />
  );
}

export default TabViewContainer;
