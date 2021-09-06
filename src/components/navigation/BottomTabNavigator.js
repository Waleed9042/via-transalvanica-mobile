import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from '../TapBarIcon';
import HomeScreen from '../../screens/HomeScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import RegionsScreen from '../../screens/RegionsScreen';
import PlanTripScreen from '../../screens/PlanTripScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'HomePage';

const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomePage';

  switch (routeName) {
    case 'HomePage':
      return 'Home';
    case 'Regions':
      return 'Regions';
    case 'PlanTrip':
      return '';
    case 'Profile':
      return 'Profile';
  }
};

export default function BottomTabNavigator(props) {
  const {navigation, route} = props;
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
    });
  }, [navigation, route]);

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: {
          backgroundColor: '#ffffff',
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
        // listeners={{
        //   tabPress: e => {
        //     // Prevent default action
        //     e.preventDefault();
        //     props.navigation.dispatch(StackActions.replace('HomePage'));
        //   },
        // }}
      />

      <BottomTab.Screen
        name="Regions"
        component={RegionsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="regions" />
          ),
        }}
      />
      <BottomTab.Screen
        name="PlanTrip"
        component={PlanTripScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="planTrip" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="profile" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
