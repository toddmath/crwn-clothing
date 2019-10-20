import { createGlobalStyle } from 'styled-components/macro';

/* CSS */
export const GlobalStyle = createGlobalStyle`
  div, p, h1, h2, h3, h4, h5, h6, span, label {
    font-family: 'Open Sans Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  h2 {
    font-weight: 600;
  }

  body {
    font-family: 'Open Sans Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    /* padding: 20px 38px; */
    padding: 20px 4vw;
    max-width: 100vw;

    @media  screen and (max-width: 1014px) {
      padding: 20px 30px;
    }

    @media screen and (max-width: 800px) {
      padding: 10px calc(3vw - 4px);
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;
