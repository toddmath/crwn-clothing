import styled, { keyframes, css } from 'styled-components/macro';

export const SpinnerOverlay = styled.div`
  height: 80vh;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation-delay: 500ms;
  animation-name: ${spinAnimation};
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
`;

const springSpinnerAnimation = props => keyframes`
  0% {
    border-width: 0px;
  }
  12.5% {
    border-width: calc(${props.size}vmin / 7);
  }
  25% {
    border-width: calc(${props.size}vmin / 23.33);
  }
  37.5% {
    border-width: calc(${props.size}vmin / 7);
  }
  50% {
    transform: rotate(115deg);
    border-width: calc(${props.size}vmin / 23.33);
  }
  62.5% {
    border-width: calc(${props.size}vmin / 7);
  }
  75% {
    border-width: calc(${props.size}vmin / 23.33);
  }
  87.5% {
    border-width: calc(${props.size}vmin / 7);
  }
  100% {
    border-width: 0px;
  }
`;

const SpinnerPartStyles = css`
  .spring-spinner-part {
    overflow: hidden;
    height: calc(${props => props.size}vmin / 2);
    width: ${props => props.size}vmin;
    &.bottom {
      transform: rotate(180deg) scale(-1, 1);
    }
  }
`;

const SpinnerRotatorStyles = css`
  .spring-spinner-rotator {
    width: ${props => props.size}vmin;
    height: ${props => props.size}vmin;
    border: calc(${props => props.size}vmin / 7) solid transparent;
    border-right-color: ${props => props.color};
    border-top-color: ${props => props.color};
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${props => springSpinnerAnimation(props)}
      ${props => props.animationDuration}ms 500ms ease-in-out infinite;
    transform: rotate(-200deg);
  }
`;

export const Spring = styled.div`
  /* CSS */
  height: ${props => props.size}vmin;
  width: ${props => props.size}vmin;
  ${SpinnerPartStyles};
  ${SpinnerRotatorStyles};
`;

/* animation: ${props => springSpinnerAnimation(props)}
      ${props => props.animationDuration}ms 500ms ease-in-out infinite; */

// const springSpinnerAnim = props => css`
//   @keyframes spring-spinner-animation {
//     0% {
//       border-width: calc(${props.size}vmin / 7);
//     }
//     25% {
//       border-width: calc(${props.size}vmin / 23.33);
//     }
//     50% {
//       transform: rotate(115deg);
//       border-width: calc(${props.size}vmin / 7);
//     }
//     75% {
//       border-width: calc(${props.size}vmin / 23.33);
//     }
//     100% {
//       border-width: calc(${props.size}vmin / 7);
//     }
//   }
// `;
