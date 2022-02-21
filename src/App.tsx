import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';

import { getGlobalStyles } from './utils';

import { store } from './store';
import { Main } from './pages';

const App: FC = () => (
  <Provider store={store}>
    <Global styles={getGlobalStyles()} />
    <Main />
  </Provider>
);

export default App;
