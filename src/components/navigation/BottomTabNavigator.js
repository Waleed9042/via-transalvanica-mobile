import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from '../TapBarIcon';
import HomeScreen from '../../screens/HomeScreen';
//import OrderHistoryScreen from '../screens/OrderHistoryScreen';
//import StoreScreen from '../screens/StoreScreen';
//import {HeaderLogo} from '../components/common/HeaderLogo';
//import SupportScreen from '../screens/SupportScreen';
import {StackActions} from '@react-navigation/native';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'HomePage';

export default function BottomTabNavigator(props) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  //props.navigation.setOptions({headerTitle: () => <HeaderLogo />});

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: {
          backgroundColor: '#1a1919',
          flex: 0.09,
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 10,
        },
        tabStyle: {
          justifyContent: 'center',
        },
      }}
      safeAreaInset={{bottom: 'never', top: 'never'}}>
      <BottomTab.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
            props.navigation.dispatch(StackActions.replace('HomePage'));
          },
        }}
      />

      <BottomTab.Screen
        name="Store"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="store" />
          ),
        }}
      />
      <BottomTab.Screen
        name="History"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="orders" />
          ),
        }}
      />
      <BottomTab.Screen
        name="SupporT"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="queries" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
