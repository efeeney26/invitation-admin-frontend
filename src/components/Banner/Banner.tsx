import React, { FC } from 'react';

import { MODE } from './types';
import { BannerStyled } from './Banner.style';

interface BannerProps {
  mode: MODE,
  text: string
}

export const Banner: FC<BannerProps> = ({
  mode = MODE.success,
  text,
}) => (
  <BannerStyled mode={mode}>
    {text}
  </BannerStyled>
);

export default Banner;
