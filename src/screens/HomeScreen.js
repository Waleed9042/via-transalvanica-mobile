import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';
//import BrandContainer from '../components/brand';

const HomeScreen = props => {
  const handleBrandPress = (brandId, image) => {
    props.navigation.navigate('BrandPage', {brandId: brandId, image: image});
  };
  const handleStorePress = () => {};
  const handleCartPress = () => {
    props.navigation.navigate('ShoppingCart');
  };
  const handleOrdersPress = () => {
    props.navigation.navigate('OrdersScreen', {caller: 'homepage'});
  };
  const handleProfilePress = () => {
    props.navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.MainViewContainer}>
      <View style={styles.ScrollViewContainer}>
        <View style={styles.NavBarContainer}>
          <View style={styles.NavbarItem}>
            <TouchableOpacity
              onPress={() => handleStorePress()}
              activeOpacity={0.5}>
              <Image
                source={require('../assets/images/app-logo.png')}
                style={styles.NavBarIcon}
                resizeMode="contain"
              />
              <Text style={styles.NavBarText}>Store</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.NavbarItem}>
            <TouchableOpacity
              onPress={() => handleCartPress()}
              activeOpacity={0.5}>
              <Image
                source={require('../assets/images/app-logo.png')}
                style={styles.NavBarIcon}
                resizeMode="contain"
              />
              <Text style={styles.NavBarText}>Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.NavbarItem}>
            <TouchableOpacity
              onPress={() => handleOrdersPress()}
              activeOpacity={0.5}>
              <Image
                source={require('../assets/images/app-logo.png')}
                style={styles.NavBarIcon}
                resizeMode="contain"
              />
              <Text style={styles.NavBarText}>Orders</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.NavbarItem}>
            <TouchableOpacity
              onPress={() => handleProfilePress()}
              activeOpacity={0.5}>
              <Image
                source={require('../assets/images/app-logo.png')}
                style={styles.NavBarIcon}
                resizeMode="contain"
              />
              <Text style={styles.NavBarText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <BrandContainer handleBrandPress={handleBrandPress} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainViewContainer: {
    flex: 1,
  },
  ScrollViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0047b9',
  },
  NavBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#0047b9',
    paddingTop: normalize(40, 'height'),
    paddingBottom: normalize(20, 'width'),
    paddingLeft: normalize(15, 'width'),
    paddingRight: normalize(15, 'width'),
  },
  NavBarItem: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  NavBarText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: normalize(12, 'width'),
    paddingTop: normalize(10, 'width'),
  },
  NavBarIcon: {
    height: normalize(20, 'width'),
    alignSelf: 'center',
  },
  ContentContainer: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    // marginTop: normalize(100, 'height'),
    borderTopRightRadius: normalize(25, 'width'),
    borderTopLeftRadius: normalize(25, 'width'),
  },
  BrandSelectorHeading: {
    color: '#919191',
    fontSize: normalize(22, 'width'),
    fontWeight: '600',
    textAlign: 'center',
    paddingLeft: normalize(50, 'width'),
    paddingRight: normalize(50, 'width'),
    paddingTop: normalize(30, 'height'),
  },
  RecentsSelectorHeading: {
    color: '#919191',
    fontSize: normalize(18, 'width'),
    fontWeight: '600',
    textAlign: 'center',
    paddingLeft: normalize(50, 'width'),
    paddingRight: normalize(50, 'width'),
    paddingTop: normalize(15, 'height'),
    paddingBottom: normalize(15, 'height'),
  },
  BrandIconContainer: {
    paddingLeft: normalize(20, 'width'),
    paddingRight: normalize(20, 'width'),
    paddingTop: normalize(20, 'height'),
    marginBottom: normalize(20, 'height'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flex: 1,
  },
});

export default HomeScreen;
