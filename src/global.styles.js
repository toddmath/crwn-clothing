import { createGlobalStyle } from 'styled-components/macro';

import { systemFontFace } from './fontFaces';
import { media } from './helpers';

/* CSS */
export const GlobalStyle = createGlobalStyle`
  ${systemFontFace};
  html {
    font-size: 10px;
    ${media.tablet`font-size: 9px;`}
    ${media.phablet`font-size: 8px;`}
  }
  h2 {
    font-weight: 600;
  }
  body {
    font-family: 'Open Sans Condensed', 'system-ui', sans-serif;
    padding: 2rem 3rem;
    max-width: 100vw;
    color: #212121;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${media.desktop`padding: 2rem 3rem;`}
    ${media.tablet`padding: 1rem;`}
    /* box-sizing: border-box; */
    &&, &:before, &:after {
      box-sizing: border-box;
    }
  }
  a:link {
    text-decoration: none;
    color: #212121;
  }
  a:visited {
    color: #212121;
    text-decoration: none;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  #root {
    &&, &:before, &:after, & div {
      box-sizing: border-box;
    }
  }
`;
