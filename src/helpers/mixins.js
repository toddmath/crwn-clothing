import { css } from 'styled-components/macro';

const link = 'rgba(74, 131, 255, 1)';
const transLink = 'rgba(74, 131, 255, 0.5)';
const transition = 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)';

const figStyles = css`
  overflow: hidden;
  display: block;
  transition: ${transition};

  &:after,
  &:before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    pointer-events: none;
    transition: ${transition};
  }

  &:before {
    z-index: 2;
  }

  &:after {
    z-index: 3;
  }

  &:hover,
  &:focus {
    filter: none;

    &:after,
    &:before {
      opacity: 0;
    }
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexRow: css`
    display: flex;
    flex-direction: row;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${link};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-shadow: none;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${transition};
    cursor: pointer;
    color: ${link};
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.26em;
      background-color: ${link};
      transition: ${transition};
      opacity: 0.7;
      background-position: 0;
      background-image: linear-gradient(${link}, ${link});
      background-repeat: repeat-x;
    }
    &:hover,
    &:focus,
    &:active {
      color: ${link};
      background-position: 0 91%;
      background-size: 1px 1px;
      outline: 0;
      &:after {
        width: 100%;
      }
    }
  `,

  img: css`
    width: 100%;
    margin: auto;
    height: auto;
    max-height: 100%;
    max-width: 100%;
  `,

  nashville: css`
    filter: sepia(0.2) contrast(1.2) brightness(1.05) saturate(1.2);
    ${figStyles};

    &:before {
      background: ${transLink};
      mix-blend-mode: darken;
    }

    &:after {
      background: rgba(247, 176, 153, 0.161);
      mix-blend-mode: lighten;
    }
  `,

  inkwell: css`
    filter: sepia(0.3) contrast(1.1) brightness(1.05) grayscale(1);
    ${figStyles};
  `,

  willow: css`
    filter: grayscale(0.5) contrast(0.95) brightness(0.9);
    ${figStyles};

    &:before {
      mix-blend-mode: overlay;
    }

    &:after {
      background-color: ${transLink};
      mix-blend-mode: color;
    }
  `,
};

export default mixins;
