import styled from '@emotion/styled';

export const ContainerStyled = styled.div(
  {
    padding: '20px',
    textAlign: 'center',
    height: '100vh',
  },
);

export const ContentStyled = styled.div(
  {
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
