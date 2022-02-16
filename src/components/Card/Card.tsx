import React, { FC } from 'react';

import { CardStyled } from './Card.style';

interface CardProps {
  name: string,
  invitation?: string,
  accept: boolean
}

export const Card: FC<CardProps> = ({
  name,
  invitation,
  accept,
}) => (
  <CardStyled>
    <h4>{name}</h4>
    <p>{invitation}</p>
    <p>{accept ? 'Принято' : 'Не принято'}</p>
  </CardStyled>
);

Card.defaultProps = {
  invitation: 'Приглашаю',
};

export default Card;
