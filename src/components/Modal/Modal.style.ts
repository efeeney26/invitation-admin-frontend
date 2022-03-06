import styled from '@emotion/styled';

export const ModalStyled = styled.div({
  position: 'fixed',
  left: 0,
  top: 0,
  background: 'white',
  width: '100%',
  height: '100vh',
  zIndex: 100,
  padding: '20px',
  color: 'black',
});

export const ImageStyled = styled.img({
  position: 'absolute',
  top: 10,
  right: 10,
  cursor: 'pointer',
});
