import React, { FC, useCallback, useState } from 'react';

import { iconCancel } from '../../assets';
import { MODE } from './types';
import { BannerStyled } from './Banner.style';
import { ImageStyled } from '../GuestCard/GuestCard.style';

interface BannerProps {
  mode: MODE,
  text?: string,
  withCancel?: boolean
}

export const Banner: FC<BannerProps> = ({
  mode = MODE.success,
  text,
  withCancel = false,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return isOpen
    ? (
      <BannerStyled
        mode={mode}
      >
        {withCancel
        && (
        <ImageStyled
          src={iconCancel}
          alt="cancel"
          onClick={handleClick}
        />
        )}
        {text}
      </BannerStyled>
    )
    : null;
};

Banner.defaultProps = {
  withCancel: false,
  text: ''
};

export default Banner;
