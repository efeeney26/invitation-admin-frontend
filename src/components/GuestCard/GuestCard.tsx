import React, { FC, useCallback } from 'react';

import { IGuest } from '../../types';
import { iconCancel } from '../../assets';
import { CardStyled, ImageStyled } from './GuestCard.style';

interface CardProps {
  guest: {
    name: string,
    invitation?: string,
    accept: boolean
  },
  onDelete?: (guest: IGuest) => void
}

export const GuestCard: FC<CardProps> = ({ guest, onDelete }) => {
  const {
    name,
    invitation,
    accept,
  } = guest;

  const handleDelete = useCallback(() => {
    onDelete?.(guest);
  }, [guest, onDelete]);

  return (
    <CardStyled>
      <ImageStyled
        src={iconCancel}
        alt="cancel"
        onClick={handleDelete}
      />
      <h4>{name}</h4>
      <p>{invitation}</p>
      <p>{`Статус: ${accept ? 'Принято' : 'Не принято'}`}</p>
    </CardStyled>
  );
};

GuestCard.defaultProps = {
  onDelete: () => {},
};

export default GuestCard;
