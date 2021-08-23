/* eslint-disable prettier/prettier */
import {
  SET_USER,
  EDIT_USER,
  ADD_USER_SUCCESS,
  SET_USER_ID,
  SET_TOKEN,
  SIGN_OUT,
  CLEAR_STORE,
} from './action-types';

export function setUserId(data) {
  return {
    type: SET_USER_ID,
    payload: data,
  };
}

export function setUserData(data) {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
}

export function setJwtToken(data) {
  return {
    type: SET_TOKEN,
    payload: data,
  };
}

export function setLoggedInUser(data) {
  return {
    type: SET_USER,
    payload: data,
  };
}

export function editUser(data) {
  return {
    type: EDIT_USER,
    payload: data,
  };
}

export function signOut(data) {
  return {
    type: SIGN_OUT,
    payload: data,
  };
}

export function clearStore(data) {
  return {
    type: CLEAR_STORE,
    payload: data,
  };
}
