import { createGlobalStyle } from 'styled-components/macro';

import { systemFontFace } from './styles/fontFaces';
import { media } from './helpers';

/* CSS */
export const GlobalStyle = createGlobalStyle`
  ${systemFontFace};
  html {
    font-size: ${({ theme }) => theme.font.sizes.body};
    ${media.tablet`
      font-size: ${({ theme }) => theme.font.sizes.bodyTablet};
    `}
    ${media.phablet`
      font-size: ${({ theme }) => theme.font.sizes.bodyPhablet};
    `}
  }
  h2 {
    font-weight: 600;
  }
  a {
    &:link {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.fg};
    }
    &:visited {
      color: ${({ theme }) => theme.colors.fg};
      text-decoration: none;
    }
  }
  body {
    font-family: ${({ theme }) => theme.font.family};
    padding: 2rem 3rem;
    max-width: 100vw;
    color: ${({ theme }) => theme.colors.fg};
    transition: background-color 200ms ease, color 300ms ease;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${media.desktop`padding: 2rem 3rem;`}
    ${media.tablet`padding: 1rem;`}
    &&, &:before, &:after {
      box-sizing: border-box;
    }
    &.dark-mode {
      color: ${({ theme }) => theme.colors.bg};
      background-color: ${({ theme }) => theme.colors.fg};
      transition: background-color 200ms ease, color 300ms ease;
      &#root,
      & a,
      & div {
        color: ${({ theme }) => theme.colors.bg};
        background-color: ${({ theme }) => theme.colors.fg};
        transition: background-color 200ms ease, color 300ms ease;
      }
      & h1,
      & h2 {
        color: ${({ theme }) => theme.colors.medium};
        transition: background-color 200ms ease, color 300ms ease;
      }
      & svg {
        fill: ${({ theme }) => theme.colors.border};
        stroke: ${({ theme }) => theme.colors.border};
        ${'' /* transition: fill 300ms ease, stroke 300ms ease; */}
        transition: unset;
      }
    }
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
