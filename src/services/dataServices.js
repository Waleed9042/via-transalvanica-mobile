/* eslint-disable prettier/prettier */
import axios from 'axios';
import {BASE_URL, NETWORK_ERROR} from '../constants/Constants';

export const register = async userData => {
  try {
    return await axios.post(`${BASE_URL}/users/register`, userData);
  } catch (error) {
    return NETWORK_ERROR;
  }
};

export const login = async (email, password) => {
  try {
    return await axios.post(`${BASE_URL}/users/login`, {email, password});
  } catch (error) {
    return NETWORK_ERROR;
  }
};

export const addUserName = async (userId, userName) => {
  try {
    return await axios.post(`${BASE_URL}/users/user-name/${userId}`, {
      userName,
    });
  } catch (error) {
    return NETWORK_ERROR;
  }
};

export const fetchAllTrips = async () => {
  try {
    return await axios.get(`${BASE_URL}/trips`);
  } catch (error) {
    return NETWORK_ERROR;
  }
};

export const createTrip = async (body) => {
console.log('🚀 ~ file: dataServices.js ~ line 40 ~ createTrip ~ body', body)
  try {
    return await axios.post(`${BASE_URL}/trips/create`, body);
  } catch (error) {
    console.log('🚀 ~ file: dataServices.js ~ line 43 ~ createTrip ~ error', error)
    return NETWORK_ERROR;
  }
};


