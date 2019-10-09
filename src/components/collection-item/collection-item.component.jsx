import React from 'react';
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
          {' '}
          Add to cart{' '}
        </AddButton>
      </Box>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
