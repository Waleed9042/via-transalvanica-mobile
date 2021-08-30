import React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import normalize from 'react-native-normalize';

const FirstRoute = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={require('../../assets/images/region-image-1.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-2.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-3.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-4.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-5.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
    </ScrollView>
  );
};

const SecondRoute = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={require('../../assets/images/region-image-1.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-2.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-3.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-4.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-5.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
    </ScrollView>
  );
};

const ThirdRoute = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={require('../../assets/images/region-image-1.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-2.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-3.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-4.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/region-image-5.png')}
          style={{
            alignSelf: 'center',
            height: 150,
            width: 500,
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            marginTop: normalize(120, 'width'),
            fontSize: normalize(15, 'width'),
            color: '#ffffff',
            fontWeight: 'bold',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          Ulpiana Staiiaea Yicasc
        </Text>
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  first: () => {
    return <FirstRoute />;
  },
  second: () => <SecondRoute />,
  third: () => <ThirdRoute />,
});

function RegionTabViewContainer() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Nature'},
    {key: 'second', title: 'Attraction'},
    {key: 'third', title: 'Photos'},
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

export default RegionTabViewContainer;
