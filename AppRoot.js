import * as React from 'react';
import {StatusBar, StyleSheet, View, Dimensions, Text} from 'react-native';
import get from 'lodash/get';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import useLinking from './src/navigation/useLinking';
import {HeaderBackButton} from './src/components/common/HeaderBackButton';
import {SkipButton} from './src/components/common/SkipButton';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import GetStartedScreen from './src/screens/GetStartedScreen';
import AppLoginsScreen from './src/screens/AppLoginsScreen';
import UserInfoScreen from './src/screens/UserInfoScreen';
import GreetingScreen from './src/screens/GreetingScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import TutorialScreen from './src/screens/TutorialScreen';
import SkipScreen from './src/screens/SkipScreen';
import BottomTabNavigator from './src/components/navigation/BottomTabNavigator';
import RegionsScreen from './src/screens/RegionsScreen';
import RegionDetail from './src/screens/RegionDetailScreen';
import PlanTripScreen from './src/screens/PlanTripScreen';
import RegionSelectScreen from './src/screens/RegionSelectScreen';
import LocationScreen from './src/screens/LocationScreen';
import SelectSegmentScreen from './src/screens/SelectSegmentScreen';
import DirectionScreen from './src/screens/DirectionScreen';
import DateScreen from './src/screens/DateScreen';
import EditTripScreen from './src/screens/EditTripScreen';
import TripCreatedScreen from './src/screens/TripCreatedScreen';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const Stack = createStackNavigator();

function AppRoot(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const {getInitialState} = useLinking(containerRef);
  const user = props.user;

  // Load any resources or data that we need prior to rendering the app

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        //SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());
        // Load fonts
        // await Font.loadAsync({
        //   ...Ionicons.font,
        //   "space-mono": require("./src/assets/fonts/SpaceMono-Regular.ttf"),
        // });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <NavigationContainer
            ref={containerRef}
            initialState={initialNavigationState}>
            <Stack.Navigator
              screenOptions={{
                headerShown: true,
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#1a1919',
                },
              }}>
              {!user.id ? (
                <Stack.Screen
                  name="GetStarted"
                  component={GetStartedScreen}
                  headerTransparent="true"
                  options={{
                    headerShown: false,
                    headerTransparent: true,
                  }}
                />
              ) : (
                <Stack.Screen
                  name="HomePage"
                  component={BottomTabNavigator}
                  options={{
                    headerTransparent: true,
                    headerShown: true,
                    headerTitleStyle: {color: '#ffffff'},
                    title: 'Home',
                  }}
                />
              )}
              <Stack.Screen
                name="HomePage"
                component={BottomTabNavigator}
                options={{
                  headerTransparent: true,
                  headerShown: true,
                  headerTitleStyle: {color: '#ffffff'},
                  title: 'Home',
                }}
              />
              <Stack.Screen
                name="Regions"
                component={RegionsScreen}
                options={{
                  headerTransparent: true,
                  headerShown: true,
                  headerTitleStyle: {color: '#ffffff'},
                }}
              />
              <Stack.Screen
                name="RegionDetails"
                component={RegionDetail}
                options={{
                  headerTransparent: true,
                  headerShown: true,
                  headerTitleStyle: {color: '#ffffff'},
                  headerBackImage: () => <HeaderBackButton />,
                  headerBackTitle: () => '',
                }}
              />
              <Stack.Screen
                name="PlanTrip"
                component={PlanTripScreen}
                options={{
                  headerTransparent: true,
                  headerShown: true,
                  headerTitleStyle: {color: '#ffffff'},
                  headerBackImage: () => <HeaderBackButton />,
                  headerBackTitle: () => '',
                }}
              />
              <Stack.Screen
                name="RegionSelect"
                component={RegionSelectScreen}
                options={{
                  headerTransparent: true,
                  headerShown: true,
                  headerTitleStyle: {color: '#ffffff'},
                  headerStyle: {
                    backgroundColor: '#EF7D21',
                  },
                  title: 'Create New Trip',
                  headerBackImage: () => <HeaderBackButton />,
                  headerBackTitle: () => '',
                }}
              />
              <Stack.Screen
                name="location"
                component={LocationScreen}
                options={{
                  headerTransparent: false,
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SelectSegment"
                component={SelectSegmentScreen}
                options={{
                  headerTransparent: true,
                  headerShown: true,
                  headerTitleStyle: {color: '#ffffff'},
                  headerStyle: {
                    backgroundColor: '#EF7D21',
                  },
                  title: 'Create New Trip',
                  headerBackImage: () => <HeaderBackButton />,
                  headerBackTitle: () => '',
                }}
              />
              <Stack.Screen
                name="Direction"
                component={DirectionScreen}
                options={{
                  headerTransparent: true,
                  headerShown: true,
                  headerTitleStyle: {color: '#ffffff'},
                  headerStyle: {
                    backgroundColor: '#EF7D21',
                  },
                  title: 'Create New Trip',
                  headerBackImage: () => <HeaderBackButton />,
                  headerBackTitle: () => '',
                }}
              />
              <Stack.Screen
                name="Date"
                component={DateScreen}
                options={{
                  headerTransparent: true,
                  headerShown: true,
                  headerTitleStyle: {color: '#ffffff'},
                  headerStyle: {
                    backgroundColor: '#EF7D21',
                  },
                  title: 'Create New Trip',
                  headerBackImage: () => <HeaderBackButton />,
                  headerBackTitle: () => '',
                }}
              />
              <Stack.Screen
                name="EditTrip"
                component={EditTripScreen}
                options={{
                  headerTransparent: false,
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="TripCreated"
                component={TripCreatedScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                  headerTransparent: true,
                  headerShown: false,
                  title: '',
                }}
              />
              <Stack.Screen
                name="LoginsScreen"
                component={AppLoginsScreen}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: '',
                  headerRight: () => <SkipButton />,
                }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: '',
                  headerRight: () => <SkipButton />,
                  headerBackImage: () => <HeaderBackButton />,
                  headerBackTitle: () => '',
                }}
              />
              <Stack.Screen
                name="ForgetPassword"
                component={ForgetPasswordScreen}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: '',
                  headerBackImage: () => <HeaderBackButton />,
                  headerBackTitle: () => '',
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: '',
                  headerBackTitle: () => '',
                  headerRight: () => <SkipButton />,
                  headerBackImage: () => <HeaderBackButton />,
                }}
              />
              <Stack.Screen
                name="UserInfoScreen"
                component={UserInfoScreen}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: '',
                  headerRight: () => <SkipButton />,
                  headerBackImage: () => <HeaderBackButton />,
                  headerBackTitle: () => '',
                }}
              />
              <Stack.Screen
                name="SkipScreen"
                component={SkipScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Greeting"
                component={GreetingScreen}
                options={{
                  title: '',
                  headerShown: false,
                  headerBackTitle: () => '',
                  headerBackImage: () => <HeaderBackButton />,
                }}
              />
              <Stack.Screen
                name="Tutorial"
                component={TutorialScreen}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: '',
                  headerRight: () => <SkipButton />,
                  headerBackImage: () => null,
                  headerBackTitle: () => '',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: get(state, 'userState'),
  };
};
export default connect(mapStateToProps)(AppRoot);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
