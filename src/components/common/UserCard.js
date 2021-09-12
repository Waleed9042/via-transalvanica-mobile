import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import normalize from 'react-native-normalize';

export default function UserCard(props) {
  return (
    <View style={styles.UserCardRow}>
      <View style={styles.UserCardContainer}>
        <View style={styles.UserCard}>
          <View style={styles.UserCardView}>
            <View style={styles.CardImage}>
              <View>
                <Image
                  source={require('../../assets/images/user-profile.png')}
                  style={styles.UserProfilePicture}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.CardDetails}>
              <Text style={styles.CardName}>{props.name || "Name"}</Text>

              <View>
                <Text style={styles.CardEmail}>{props.email || "Email"}</Text>
              </View>
            </View>
            <View style={styles.CardControls}>
              <View style={styles.CardRemoveContainer}>
                <TouchableOpacity
                  style={styles.EditButtonContainer}
                  activeOpacity={0.5}
                  onPress={() => props.handleEditProfile()}>
                  <View style={styles.EditProfileButton}>
                    <Text>Edit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  UserCardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },

  CardControls: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  UserCardContainer: {
    width: '94%',
    height: normalize(130, 'width'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  UserCardView: {
    flexDirection: 'row',
    padding: normalize(20, 'width'),
  },
  UserCard: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#EF7D21',
    borderRadius: 15,
    backgroundColor: '#ffffff',
  },
  CardImage: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardDetails: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  CardRemoveContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 7,
    paddingRight: 0,
  },

  UserProfilePicture: {
    width: normalize(60, 'width'),
  },
  UserAddressPin: {
    width: normalize(45, 'width'),
  },
  UserCardText: {
    marginTop: 10,
    color: 'rgb(98,99,100)',
    fontSize: normalize(15, 'width'),
    fontWeight: 'bold',
  },
  CardName: {
    marginLeft: normalize(15, 'width'),
    color: 'rgb(98,99,100)',
    fontSize: normalize(16, 'width'),
    fontWeight: 'bold',
  },
  CardPhoneNumber: {
    marginTop: normalize(5, 'width'),
    marginLeft: normalize(15, 'width'),
    color: 'rgb(98,99,100)',
    fontSize: normalize(16, 'width'),
    fontWeight: 'bold',
  },
  CardEmail: {
    marginTop: normalize(5, 'width'),
    marginLeft: normalize(15, 'width'),
    color: 'rgb(98,99,100)',
    fontSize: normalize(12, 'width'),
    fontWeight: 'bold',
  },
  CardAddress: {
    marginTop: normalize(5, 'width'),
    marginLeft: normalize(15, 'width'),
    color: 'rgb(98,99,100)',
    fontSize: normalize(14, 'width'),
    fontWeight: 'bold',
  },
  EditProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fb4137',
    height: normalize(25, 'width'),
    width: normalize(25, 'width'),
    borderRadius: 50,
  },
  DeliveryAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a5df53',
    height: normalize(25, 'width'),
    width: normalize(25, 'width'),
    borderRadius: 50,
  },
});
