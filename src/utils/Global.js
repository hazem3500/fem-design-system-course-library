import { normalize } from 'polished';
import { primaryFont } from '.';

const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`
    ${normalize()};

    html {
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: ${primaryFont};
    }
`;
