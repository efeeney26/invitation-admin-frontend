import React, { FC } from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Global } from '@emotion/react';

import { RequireAuth } from './components';
import { getGlobalStyles } from './utils';

import { store } from './store';
import { Main, Auth } from './pages';

const App: FC = () => (
  <Provider store={store}>
    <HashRouter>
      <Global styles={getGlobalStyles()} />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="main"
          element={(
            <RequireAuth>
              <Main />
            </RequireAuth>
          )}
        />
      </Routes>
    </HashRouter>
  </Provider>
);

export default App;
