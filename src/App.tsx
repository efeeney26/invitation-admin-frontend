import React, { FC, useEffect } from 'react';

interface AppProps {
  label: string
}

const App: FC<AppProps> = ({ label }) => {
  useEffect(() => {
    console.log(label);
  }, [label]);

  return (
    <h1>Hello</h1>
  );
};

export default App;
