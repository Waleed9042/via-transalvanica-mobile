import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import normalize from 'react-native-normalize';
import {DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import GreetingScreen from '../../screens/GreetingScreen';
import BottomTabNavigator from '../navigation/BottomTabNavigator';

export function DrawerIcon(props) {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigationProp.dispatch(DrawerActions.toggleDrawer())
      }>
      <Image
        source={require('../../assets/images/app-logo.png')}
        style={styles.MenuIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Account"
        onPress={() => props.navigation.navigate('UserProfile')}
      />
      <DrawerItem
        label="Privacy Policy"
        onPress={() => Linking.openURL('http://aquafina.com.pk/privacy-policy')}
      />
    </DrawerContentScrollView>
  );
}

export function HeaderMenu(props) {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      overlayColor="transparent"
      drawerStyle={{
        backgroundColor: '#1a1919',
        width: 175,
      }}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Greeting" component={GreetingScreen} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  MenuIcon: {
    width: normalize(18, 'width'),
    marginLeft: normalize(20, 'width'),
  },
});
