import React from 'react';
import PropTypes from 'prop-types';
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

  const handleHistory = () => history.push(`${match.url}${linkUrl}`);

  return (
    <MenuItemContainer
      title={title}
      aria-label={title}
      size={size}
      onClick={handleHistory}
    >
      <BackgroundImageContainer
        imageUrl={imageUrl}
        className='background-image'
      />
      <ContentContainer>
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

export default MenuItem;
