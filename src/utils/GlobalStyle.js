import { createGlobalStyle } from 'styled-components';
import { device } from './devices';

export const GlobalStyle = createGlobalStyle`
    html {
       overflow-y: visible;
       box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
       box-sizing: inherit;
    }

    html {

        font-size: 62.5%;

    }
`