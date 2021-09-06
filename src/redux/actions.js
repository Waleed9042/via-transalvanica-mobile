/* eslint-disable prettier/prettier */
import {
  SET_USER,
  EDIT_USER,
  ADD_USER_SUCCESS,
  SET_USER_ID,
  SET_TOKEN,
  SIGN_OUT,
  CLEAR_STORE,
  SET_REGION,
  SET_STAGE,
  SET_DIR,
  SET_S_DATE,
  SET_E_DATE,
  SET_TRIP_DESC,
  SET_TRIP_NAME,
} from './action-types';

export function setRegion(data) {
  return {
    type: SET_REGION,
    payload: data,
  };
}

export function setDescription(data) {
  return {
    type: SET_TRIP_DESC,
    payload: data,
  };
}

export function setName(data) {
  return {
    type: SET_TRIP_NAME,
    payload: data,
  };
}

export function setStage(data) {
  return {
    type: SET_STAGE,
    payload: data,
  };
}

export function setDirection(data) {
  return {
    type: SET_DIR,
    payload: data,
  };
}

export function setStartDate(data) {
  return {
    type: SET_S_DATE,
    payload: data,
  };
}
export function setEndDate(data) {
  return {
    type: SET_E_DATE,
    payload: data,
  };
}

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
