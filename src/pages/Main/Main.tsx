import React, { FC, useEffect } from 'react';

interface MainProps {
  label: string
}

const Main: FC<MainProps> = ({ label }) => {
  useEffect(() => {
    console.log('Main mount');
  }, []);
  return (
    <h1>{label}</h1>
  );
};

export default Main;
