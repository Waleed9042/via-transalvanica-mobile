import React, {useState} from 'react';
import {StackActions} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';
import {connect} from 'react-redux';
import {editUser, signOut, clearStore} from '../redux/actions';
// import {updateUser} from '../services/HttpService';
import get from 'lodash/get';
import UserCard from '../components/common/UserCard';
import {Overlay} from 'react-native-elements';
import ButtonMedium from '../components/common/ButtonMedium';
//import CustomButton from '../components/common/CustomButton';

function UserProfileScreen(props) {
  const [signOut, setSignOut] = useState(false);
  const [visible, setVisible] = useState(false);
  const [userName, setUsername] = useState(props.user.first_name);
  const [userEmail, setUserEmail] = useState(props.user.email);

  const user = props.user;

  const handleEditProfile = () => {
    toggleOverlay();
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const handleUsernameChange = name => {
    setUsername(name);
  };
  const handleUserEmailChange = email => {
    setUserEmail(email);
  };
  const handleUpdateProfile = () => {
    // const updateObject = {
    //   _id: props.user._id,
    //   user: {first_name: userName, email: userEmail},
    // };
    // updateUser(updateObject, props.user.jwtToken).then(users => {
    //   if (!users) console.log('Error Updating the name');
    //   else
    //     props.editUser({first_name: userName, email: userEmail}),
    //       toggleOverlay();
    // });
  };
  if (!user.userId) {
    props.navigation.dispatch(StackActions.replace('Login'));
    return null;
  } else
    return (
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.StoreHeadingContainer}></View>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={
            Platform.OS === 'ios' ? styles.ModalStylesIOS : styles.ModalStyles
          }>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalSubtitle}>
              <Text style={styles.ModalSubtitleText}>Edit your Profile</Text>
            </View>

            <View style={styles.ModalFormGroup}>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.InputStyle}
                  onChangeText={handleUsernameChange}
                  placeholder="Your Name"
                  placeholderTextColor="#6e6e6e"
                  keyboardAppearance="dark"
                  value={userName}
                  autoFocus={true}
                />
              </View>
            </View>
            <View style={styles.ModalFormGroup}>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.InputStyle}
                  onChangeText={handleUserEmailChange}
                  placeholder="Your Email"
                  placeholderTextColor="#6e6e6e"
                  keyboardAppearance="dark"
                  value={userEmail}
                  autoFocus={true}
                />
              </View>
            </View>
            <View style={styles.ModalVerificationCodeContainer}>
              <TouchableOpacity
                style={styles.VerifyButton}
                activeOpacity={0.5}
                onPress={handleUpdateProfile}>
                <Text style={styles.VerifyButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>

        <ScrollView style={{flex: 1}}>
          <UserCard
            name={props.user.first_name}
            phone={props.user.phone}
            email={props.user.email}
            handleEditProfile={handleEditProfile}
          />
          <View style={{marginTop: 15}}>
            <ButtonMedium
              buttonText="Sign Out"
              color="#EF7D21"
              textColor="#ffffff"
              onPressAction={() => {
                props.signOut();
                // props.clearStore();
                // props.setOrders([]);
                setSignOut(true);
              }}
              // buttonIcon="md-log-out"
            />
          </View>
        </ScrollView>
        <View style={{flex: 0.2}}></View>
      </View>
    );
}
const mapStateToProps = state => {
  return {
    user: get(state, 'userState'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // editUser: value => dispatch(editUser(value)),
    signOut: () => dispatch(signOut()),
    // setOrders: value => dispatch(setOrders(value)),
    // clearStore: () => dispatch(clearStore()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 10,
  },
  StoreHeadingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(135, 'width'),
    backgroundColor: '#EF7D21',
    marginBottom: normalize(20, 'width'),
  },
  PageHeadingText: {
    color: '#EF7D21',
    fontSize: normalize(32, 'width'),
    fontWeight: 'bold',
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(20, 'width'),
  },
  heading: {
    marginBottom: '10%',
    fontSize: 24,
    color: 'white',
  },
  EmptyMessage: {
    marginTop: normalize(5, 'width'),
    marginLeft: 7,
    color: 'rgb(98,99,100)',
    fontSize: normalize(16, 'width'),
    textAlign: 'center',
  },
  ModalStylesIOS: {
    backgroundColor: '#018bff',
    width: '95%',
    height: normalize(260, 'width'),
    borderRadius: 15,
    marginBottom: normalize(120, 'width'),
  },
  ModalStyles: {
    backgroundColor: '#018bff',
    width: '95%',
    height: normalize(260, 'width'),
    borderRadius: 15,
  },
  ModalSubtitle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ModalSubtitleText: {
    color: '#ffffff',
    fontSize: normalize(18, 'width'),
    fontWeight: '600',
    textAlign: 'center',
    paddingLeft: normalize(50, 'width'),
    paddingRight: normalize(50, 'width'),
    paddingTop: normalize(15, 'width'),
    paddingBottom: normalize(10, 'width'),
  },
  ModalVerificationCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(20, 'width'),
  },
  VerifyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: normalize(32, 'width'),
    width: normalize(120, 'width'),
    borderRadius: 50,
    margin: 5,
  },
  VerifyButtonText: {
    color: '#747474',
    fontSize: normalize(14, 'width'),
  },
  ModalFormGroup: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    marginTop: normalize(15, 'width'),
  },
  InputContainer: {
    flexDirection: 'row',
    height: normalize(45, 'width'),
    borderColor: '#353735',
    borderWidth: 3,
    borderRadius: 25,
    backgroundColor: '#292929',
    paddingLeft: normalize(25, 'width'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputStyle: {
    flex: 1,
    color: '#ffffff',
    fontSize: normalize(14, 'width'),
  },
});
