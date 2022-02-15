import React, { FC, useEffect } from 'react';

import { Main } from './pages';

const App: FC = () => {
  useEffect(() => {
    console.log('App mount');
  }, []);
  return (
    <Main label="Hello" />
  );
};

export default App;
