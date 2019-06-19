import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles/global';
import Main from './components/Main';
import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Main />
  </Provider>
);

export default App;
