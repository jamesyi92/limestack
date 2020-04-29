import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
      overflow-x: visible;
      box-sizing: border-box;
      font-size: 62.5%;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

`