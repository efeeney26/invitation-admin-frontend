import React, { FC, useCallback, useMemo } from 'react';

import { RESOURCE } from '../../constants';
import { IGuest, MODE } from '../../types';
import { iconCancel } from '../../assets';
import { CardStyled, ImageStyled, ImageContainer } from './GuestCard.style';
import Button from '../Button/Button';

interface CardProps {
  guest: IGuest,
  onDelete?: (guest: IGuest) => void,
  onClick?: (id: string) => void
}

export const GuestCard: FC<CardProps> = ({ guest, onDelete, onClick }) => {
  const {
    _id: id,
    name,
    accept,
  } = guest;

  const link = useMemo(() => `${RESOURCE}?id=${id}`, [id]);

  const handleDelete = useCallback((e) => {
    e.stopPropagation();
    onDelete?.(guest);
  }, [guest, onDelete]);

  const handleClick = useCallback(() => {
    onClick?.(id);
  }, [id, onClick]);

  const handleCopyClick = useCallback((e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(link);
  }, [link]);

  return (
    <CardStyled onClick={handleClick}>
      <ImageContainer>
        <ImageStyled
          src={iconCancel}
          alt="cancel"
          onClick={handleDelete}
        />
      </ImageContainer>
      <h4>{name}</h4>
      <p>{`Статус: ${accept ? 'Принято' : 'Не принято'}`}</p>
      <p>{`Ссылка: ${link}`}</p>
      <Button
        label="Скопировать ссылку"
        mode={MODE.success}
        onClick={handleCopyClick}
      />
    </CardStyled>
  );
};

GuestCard.defaultProps = {
  onDelete: () => {},
  onClick: () => {},
};

export default GuestCard;
