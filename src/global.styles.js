import { createGlobalStyle } from 'styled-components/macro';

/* CSS */
export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;

    @media screen and (max-width: 800px) {
      font-size: 9px;
    }

    @media screen and (max-width: 400px) {
      font-size: 8px;
    }
  }

  h2 {
    font-weight: 600;
  }

  body {
    font-family: 'Open Sans Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    /* padding: 20px 38px; */
    padding: 2rem 3rem;
    max-width: 100vw;

    @media  screen and (max-width: 1014px) {
      padding: 2rem 3rem;
    }

    @media screen and (max-width: 800px) {
      /* padding: 10px calc(3vw - 4px); */
      padding: 1rem;
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
