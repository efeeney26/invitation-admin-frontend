import React, { FC } from 'react';

import { iconCancel } from '../../assets';
import { ModalStyled, ImageStyled } from './Modal.style';

interface ModalProps {
  isOpen: boolean,
  onClose: () => void
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
}) => (
  isOpen
    ? (
      <ModalStyled>
        <ImageStyled
          src={iconCancel}
          alt="cancel"
          onClick={onClose}
        />
        {children}
      </ModalStyled>
    ) : null
);

export default Modal;
