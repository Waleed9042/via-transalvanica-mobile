import {combineReducers} from 'redux';
import {
  SET_USER,
  SET_USER_ID,
  SET_TOKEN,
  EDIT_USER,
  ADD_USER_SUCCESS,
  SIGN_OUT,
} from './action-types';

const INITIALSTATE = {
  regions: [],
  user: {},
  trips: [],
};
const appState = (state = INITIALSTATE, action) => {
  switch (action.type) {
    // case SET_BRANDS: {
    //   return {...state, brands: action.payload};
    // }
    // case SET_PRODUCTS: {
    //   return {...state, products: action.payload};
    // }
    // case UPDATE_PRODUCTS: {
    //   return {...state, products: [...state.products, action.payload]};
    // }
    // case SET_TICKETS: {
    //   return {...state, tickets: action.payload};
    // }
    // case SET_PROMOS: {
    //   return {...state, promos: action.payload};
    // }
    // case SET_QUERIES: {
    //   return {...state, queries: action.payload};
    // }
    // case ADD_QUERY: {
    //   return {...state, queries: [action.payload, ...state.queries]};
    // }
    // //Cart Reducers
    // case ADD_TO_CART: {
    //   return {...state, cart: [...state.cart, action.payload]};
    // }
    // case UPDATE_CART: {
    //   return {...state, cart: action.payload};
    // }
    // case EMPTY_CART: {
    //   return {...state, cart: []};
    // }
    // case DELETE_FROM_CART: {
    //   const newArray = state.cart.filter(item => item.id !== action.payload.id);
    //   return {...state, cart: newArray};
    // }
    // //ORDER reducers
    // case SET_ORDERS: {
    //   return {...state, orders: action.payload};
    // }
    // case ADD_ORDER: {
    //   return {...state, orders: [...state.orders, action.payload]};
    // }
    // case CANCEL_ORDER: {
    //   const newArray = state.orders.filter(
    //     item => item.id !== action.payload.id,
    //   );

    //   return {...state, orders: newArray};
    // }
    // case CLEAR_STORE: {
    //   return INITIALSTATE;
    // }
    default:
      return state;
  }
};

const userState = (state = {}, action) => {
  switch (action.type) {
    case SET_USER: {
      return {...state, userId: action.payload._id, ...action.payload};
    }
    case SET_USER_ID: {
      return {...state, userId: action.payload};
    }
    case SET_TOKEN: {
      return {...state, jwtToken: action.payload};
    }
    case EDIT_USER: {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    }
    case ADD_USER_SUCCESS: {
      return {
        ...state,
        userDetails: {
          name: action.payload.first_name,
          email: action.payload.email,
          phone: action.payload.phone,
          address: action.payload.address_1,
          city: action.payload.city,
        },
      };
    }
    case SIGN_OUT: {
      return {};
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  appState,
  userState,
});

export default rootReducer;
