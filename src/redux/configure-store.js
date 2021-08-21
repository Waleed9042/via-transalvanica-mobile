import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['appState', 'userState'],
};

const pReducer = persistReducer(config, rootReducer);

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    pReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  );
  const persistor = persistStore(store);
  return {store, persistor};
}
