/* eslint-disable no-nested-ternary */
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useSpring } from 'react-spring';

import { useDarkMode } from '../../hooks/useDarkMode';

import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubTitle,
  ContentTitle,
  MenuItemContainer,
} from './menu-item.styles';

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();
  const match = useRouteMatch();
  const darkMode = useDarkMode(false);
  const handleHistory = () => history.push(`${match.url}${linkUrl}`);

  const props = useSpring({
    x: isHovered ? '1.2' : '1',
    o: darkMode.value ? (isHovered ? 0.7 : 1.0) : isHovered ? 1.0 : 0.7,
    config: { mass: 8, tension: 550, friction: 110 },
  });

  /* { mass: 1, tension: 284, friction: 28 } */

  const handleOnHover = () => {
    setIsHovered(true);
  };

  const handleOnBlur = () => {
    setIsHovered(false);
  };

  return (
    <MenuItemContainer
      title={title}
      aria-label={title}
      size={size}
      onClick={handleHistory}
      onMouseOver={handleOnHover}
      onMouseOut={handleOnBlur}
      onFocus={handleOnHover}
      onBlur={handleOnBlur}
    >
      <BackgroundImageContainer
        style={{
          transform: props.x.interpolate(x => `scale(${x})`),
        }}
        imageurl={imageUrl}
        className='background-image'
      />
      <ContentContainer
        style={{
          opacity: props.o.interpolate(o => `${o}`),
        }}
        className='content'
      >
        <ContentTitle>{title}</ContentTitle>
        <ContentSubTitle>shop now</ContentSubTitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

MenuItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default memo(MenuItem);

/*
<ContentContainer
  style={{
    opacity: props.y
      .interpolate({
        range: darkMode.value ? ['0.7', '1'] : ['1', '0.7'],
        output: darkMode.value ? ['1', '0.7'] : ['0.7', '1'],
      })
      .interpolate(y => `${y}`),
  }}
  className='content'
>

<BackgroundImageContainer
  style={{
    transform: props.x
      .interpolate({
        range: [1, 1.2],
        output: [1, 1.2],
      })
      .interpolate(x => `scale(${x})`),
  }}
  imageurl={imageUrl}
  className='background-image'
/>

<BackgroundImageContainer
  style={{
    transform: props.x
      .interpolate({
        range: [1, 1.2],
        output: [1, 1.2],
      })
      .interpolate(x => `scale(${x})`),
  }}
  imageurl={imageUrl}
  className='background-image'
/>
*/
