import { css } from 'styled-components/macro';

/**
 * Object with sizes for media queries
 * 62.5em = desktop
 * 48em = tablet
 * 30em = phablet
 * 23.5em = phone
 */
const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

const toFloat = num => parseFloat(num);
const toEm = px => toFloat(toFloat(px) / 16).toFixed(2) + 'em'; // eslint-disable-line prefer-template

const toKeys = obj => Object.keys(obj);

export const media = toKeys(sizes).reduce((acc, key) => {
  if (key in sizes) {
    acc[key] = (...args) => css`
      @media (max-width: ${toEm(sizes[key])}) {
        ${css(...args)};
      }
    `;
  }
  return acc;
}, {});

export default media;
