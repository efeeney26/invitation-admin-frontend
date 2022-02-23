import styled from '@emotion/styled';

export const CardStyled = styled.div({
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: '300px',
  background: 'grey',
  position: 'relative',
});

export const ImageStyled = styled.img({
  position: 'absolute',
  top: 10,
  right: 10,
  cursor: 'pointer',
});
