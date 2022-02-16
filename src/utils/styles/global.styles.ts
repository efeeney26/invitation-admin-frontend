import { css } from '@emotion/react';

const getGlobalStyles = (): ReturnType<typeof css> => css`
    html {
      height: 100%;
      overflow-x: hidden;
    }
   html,
   body {
     font-family: 'OpenSansLight', sans-serif;
     position: relative;
   }
   body {
     min-height: 100%;
   }
  * {
    vertical-align: baseline;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    border: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export default getGlobalStyles;
