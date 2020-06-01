import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react-web';

import {
  DarkModeContainer,
  DarkModeFlexCenter,
} from './dark-mode-toggle.styles';

const options = Object.freeze({
  animationData: require('./animationData.json'), // eslint-disable-line global-require
});

// eslint-disable-next-line no-unused-vars
const noop = (nextValue) => null;

// eslint-disable-next-line no-unused-vars
const DarkModeToggle = ({
  size = 70,
  checked = false,
  onChange = noop,
  speed = 1,
  ...extraProps
}) => {
  const ref = useRef();
  const [progress, setProgress] = useState(() => 0);

  useEffect(() => {
    if (progress >= 0.5) {
      if (checked) {
        ref.current.anim.pause();
      } else if (ref.current.anim.isPaused) {
        ref.current.anim.play();
      }
    } else if (!checked) {
      ref.current.anim.pause();
    }
  }, [checked, progress]);

  useEffect(() => (!!checked && ref.current.anim.play()) || undefined, [
    checked,
  ]);

  const [eventListeners] = useState(() => [
    {
      eventName: 'enterFrame',
      callback: ({ currentTime, totalTime }) =>
        setProgress(currentTime / totalTime),
    },
  ]);

  return (
    <DarkModeContainer
      size={size}
      onClick={() => ref.current.anim.isPaused && onChange(!checked)}
    >
      <DarkModeFlexCenter size={size} {...extraProps}>
        <Lottie
          ref={ref}
          speed={speed}
          isClickToPauseDisabled
          eventListeners={eventListeners}
          forceSegments
          options={{
            ...options,
            autoplay: false,
            loop: true,
          }}
        />
      </DarkModeFlexCenter>
    </DarkModeContainer>
  );
};

DarkModeToggle.propTypes = {
  size: PropTypes.number,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  speed: PropTypes.number,
};

// DarkModeToggle.defaultProps = {
//   size: 85,
//   checked: false,
//   onChange: nextValue => null, // eslint-disable-line no-unused-vars
//   speed: 1.3,
// };

export default DarkModeToggle;
