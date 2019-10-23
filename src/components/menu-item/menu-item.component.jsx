import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
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
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubTitle>SHOP NOW</ContentSubTitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
