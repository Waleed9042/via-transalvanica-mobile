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
