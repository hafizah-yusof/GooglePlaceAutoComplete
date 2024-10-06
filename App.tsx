import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AutocompleteScreen from './src/screens/AutocompleteScreen';

const App = () => {
  return (
    <Provider store={store}>
      <AutocompleteScreen />
    </Provider>
  );
};

export default App;
