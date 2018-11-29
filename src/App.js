import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import AppNavigator from "./Router";

const App = () => (
  <Provider store={Store}>
    <AppNavigator />
  </Provider>
);

export default App;
