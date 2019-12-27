/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';

import { CollectionItem } from '../../components';
import {
  selectCollection,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';

export const CollectionPage = ({ collection: { title, items } }) => (
  <CollectionPageContainer>
    <CollectionTitle>{title}</CollectionTitle>
    <CollectionItemsContainer>
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </CollectionItemsContainer>
  </CollectionPageContainer>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
