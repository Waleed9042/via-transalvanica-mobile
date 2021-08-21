/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * This is the entry point for the client side
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import configureStore from './src/redux/configure-store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppRoot from './AppRoot.js';

const App = () => {
  const initialState = {};
  const {store, persistor} = configureStore(initialState);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoot />
      </PersistGate>
    </Provider>
  );
};

export default App;
