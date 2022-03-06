import styled from '@emotion/styled';

export const LabelStyled = styled.label<{ fullWidth: boolean }>(
  {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  ({ fullWidth }) => ({
    width: fullWidth ? '100%' : '50%',
  }),
);

export const LabeledInput = styled.input({
  border: '1px solid black',
  padding: '20px',
  borderRadius: '5px',
  marginTop: '10px',
});

export const LabeledTextArea = styled.textarea({
  border: '1px solid black',
  padding: '30px',
  borderRadius: '5px',
  marginTop: '10px',
});
