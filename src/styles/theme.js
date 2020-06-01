import { css } from 'styled-components/macro'

import { media } from '../helpers'

const theme = {
  colors: {
    bg: 'white',
    fg: '#212121',
    h2: '#333',
    border: 'darkgrey',
    medium: 'rgba(238, 238, 238, 1)',
  },
  font: {
    family: `'Open Sans Condensed', 'system-ui', sans-serif`,
    sizes: {
      h2: '4.6rem',
      body: '10px',
      bodyTablet: '9px',
      bodtPhablet: '8px',
    },
  },
  grid: {
    directory: css`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(10, 7.5vh);
      grid-gap: 1rem;
      height: 100%;
      overflow-y: hidden;
      ${media.phablet`grid-template-rows: repeat(10, 7.7vh);`}
    `
  }
};

export default theme;
