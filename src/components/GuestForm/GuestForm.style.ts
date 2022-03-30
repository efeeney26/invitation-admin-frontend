import styled from '@emotion/styled';

export const GuestFormStyled = styled.form({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
  '> :not(:last-child)': {
    marginBottom: '30px',
  },
});
