import React, { Fragment } from 'react';
import { GlobalStyle } from './styles/global';
import Header from './components/Header';
import { Wrapper } from './styles/components';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>
      <Header />
    </Wrapper>
  </Fragment>
);

export default App;
