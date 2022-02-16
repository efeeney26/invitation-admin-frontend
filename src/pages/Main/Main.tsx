import React, { FC, useEffect } from 'react';

import { ContainerStyled } from './Main.style';

interface MainProps {
  label: string
}

const Main: FC<MainProps> = ({ label }) => {
  useEffect(() => {
    console.log('Main mount');
  }, []);

  return (
    <ContainerStyled>
      <h1>{label}</h1>
    </ContainerStyled>
  );
};

export default Main;
