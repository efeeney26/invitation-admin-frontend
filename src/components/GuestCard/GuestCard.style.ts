import styled from '@emotion/styled';

export const CardStyled = styled.div({
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: '10em',
  background: 'grey',
  position: 'relative',
  cursor: 'pointer',
});

export const ImageContainer = styled.div({
  position: 'absolute',
  top: 10,
  right: 10,
});

export const ImageStyled = styled.img({
  cursor: 'pointer',
});
