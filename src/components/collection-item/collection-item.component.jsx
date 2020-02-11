import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  Box,
} from './collection-item.styles';

export const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <Box className='box'>
        <AddButton onClick={() => addItem(item)} regular>
          Add to cart
        </AddButton>
      </Box>
    </CollectionItemContainer>
  );
};

CollectionItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  item: PropTypes.exact({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
