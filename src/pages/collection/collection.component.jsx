/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import posed from 'react-pose';
import styled from 'styled-components/macro';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {
  selectCollection,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';
// import Spinner from '../../components/spinner/spinner.component';

const CollectionContainer = styled(
  posed.div({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 },
  })
)`
  display: flex;
  flex-direction: column;
`;

const SlideInCollectionItem = styled(
  posed.div({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
  })
)`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 35rem;
  align-items: center;
  position: relative;

  @media screen and (max-width: 55rem) {
    max-width: 100%;
    width: 45vw;

    &:hover,
    &:focus {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
        display: flex;
      }
    }
  }

  @media screen and (max-width: 30rem) {
    width: 90vw;
    margin-bottom: 1.5rem;
  }
`;

export const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {items.map(item => (
            <SlideInCollectionItem key={item.id} item={item}>
              <CollectionItem item={item} />
            </SlideInCollectionItem>
          ))}
        </CollectionItemsContainer>
      </CollectionContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
