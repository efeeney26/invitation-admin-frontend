import styled from '@emotion/styled';

export const ContainerStyled = styled.div(
  {
    padding: '20px',
    textAlign: 'center',
    minHeight: '100vh',
    background: 'black',
    color: 'white',
    fontSize: '2rem',
  },
);

export const HeaderStyled = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
});

export const ContentStyled = styled.div(
  {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '> :not(:last-child)': {
      marginBottom: '20px',
    },
  },
);

export const InfoStyled = styled.div({
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1,
});
