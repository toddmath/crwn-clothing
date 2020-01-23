import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {
  Box,
  BackgroundImageContainer,
  ContentContainer,
  ContentSubTitle,
  ContentTitle,
  MenuItemContainer,
} from './menu-item.styles';

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  let match = useRouteMatch(); // eslint-disable-line prefer-const

  return (
    <MenuItemContainer
      title={title}
      aria-label={title}
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        imageUrl={imageUrl}
        className='background-image'
      />
      <Box className='box'>
        <ContentContainer>
          <ContentTitle>{title.toUpperCase()}</ContentTitle>
          <ContentSubTitle>SHOP NOW</ContentSubTitle>
        </ContentContainer>
      </Box>
    </MenuItemContainer>
  );
};

export default MenuItem;
