import axios from 'axios';
import {
  BASE_URL,
  REGISTER_URL,
  VERIFY_URL,
  RESEND_URL,
  LOGIN_URL,
  EDIT_USER,
  TEMP_TOKEN,
  LOGOUT_URL,
} from '../constants/AppConstants';

export async function registerRequest(requestObj) {
  try {
    const URL = BASE_URL + REGISTER_URL;

    return await axios.post(URL, requestObj, {
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (e) {
    console.log('Error in Post Request -> e', e);
  }
}

// Verify Request 2.0
export async function verifyRequest(requestObj, token) {
  try {
    const URL = BASE_URL + VERIFY_URL;
    return await axios
      .post(URL, requestObj, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (response.data.metadata.status !== 'SUCCESS') {
          return response.data.metadata;
        } else return response.data.payload;
      });
  } catch (e) {
    console.log('Error in Post Request -> e', e);
  }
}

export async function fetchOrders(id, token) {
  try {
    const URL = `${BASE_URL}${FETCH_ORDERS} ${id ? id : CUSTOMER}`;
    return await axios
      .get(URL, {
        headers: {
          Authorization: token ? `Bearer ${token}` : TEMP_TOKEN,
        },
      })
      .then(response => {
        if (response.data.data) {
          return response.data.data;
        }
      });
  } catch (e) {
    console.log('Error in Get Request -> e', e);
  }
}

// Submit or Add order
export async function submitOrder(requestObject, token) {
  try {
    const URL = BASE_URL + SUBMIT_ORDER;
    return await axios
      .post(URL, requestObject, {
        headers: {
          Authorization: token ? `Bearer ${token}` : TEMP_TOKEN,
        },
      })
      .then(response => {
        //console.log("RESPONSE", response.data.metadata);
        if (response.data.metadata.status !== 'SUCCESS')
          return response.data.metadata;
        else return response.data.payload.data.order;
      });
  } catch (e) {
    console.log('Error in Post Request -> e', e);
  }
}
export async function resendRequest(requestObj) {
  try {
    const URL = BASE_URL + RESEND_URL;
    return await axios
      .post(URL, resendObj, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (response.data.metadata.status !== 'SUCCESS') {
          return response.data.metadata;
        } else return response.data.payload;
      });
  } catch (e) {
    console.log('Error in Post Request -> e', e);
  }
}

// Login Request 2.0
export async function logInRequest(requestObj) {
  try {
    const URL = BASE_URL + LOGIN_URL;
    return await axios
      .post(URL, requestObj, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(response => {
        if (response.data.metadata.status !== 'SUCCESS')
          return response.data.metadata;
        else return response.data.payload;
      });
  } catch (e) {
    console.log('Error in Post Request -> e', e);
  }
}
// Edit User
export async function updateUser(requestObject, token) {
  try {
    const URL = BASE_URL + EDIT_USER;
    return await axios
      .put(URL, requestObject, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (response.data.metadata.status !== 'SUCCESS')
          return response.data.metadata;
        else return response.data.payload;
      });
  } catch (e) {
    console.log('Error in Post Request -> e', e);
  }
}

export async function fetchBrands(token) {
  try {
    const URL = BASE_URL + CATEGORIES;
    return await axios
      .get(URL, {
        headers: {
          Authorization: token ? `Bearer ${token}` : TEMP_TOKEN,
        },
      })
      .then(response => {
        if (!response.data) return response.data;
        else return response.data.data;
      });
  } catch (e) {
    console.log('Error in Post Request -> e', e);
  }
}

export async function fetchProductsByBrand(queryParams, token) {
  try {
    const URL = BASE_URL + PRODUCTS + queryParams;
    return await axios
      .get(URL, {
        headers: {
          Authorization: token ? `Bearer ${token}` : TEMP_TOKEN,
        },
      })
      .then(response => {
        if (!response.data) return response.data;
        else return response.data.data;
      });
  } catch (e) {
    console.log('Error in Post Request -> e', e);
  }
}
// Cancel or Delete an Order
export async function removeOrder(requestObject, token) {
  try {
    const URL = BASE_URL + CANCEL_ORDER;
    return await axios
      .post(URL, requestObject, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log('CANCEL RESPONSE =>', response.data.metadata);
        console.log('RESPONSE payload=>', response.data.payload);

        if (response.data.metadata.status !== 'SUCCESS')
          return response.data.metadata;
        else return response.data.payload;
      });
  } catch (e) {
    console.log('Error in Post Request -> e', e);
  }
}
export async function logout(queryParams, token) {
  try {
    const URL = BASE_URL + LOGOUT_URL + queryParams;

    return await axios
      .get(URL, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (!response.data) return response.data;
        else return response.data;
      });
  } catch (e) {
    console.log('Error in Post Request -> e', e);
  }
}
