import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import posed from 'react-pose';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const Container = styled(
  posed.div({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 },
  })
)`
  display: flex;
  flex-direction: column;
`;

const SlideIn = styled(
  posed.div({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
  })
)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    <Container>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <SlideIn key={id} {...otherCollectionProps}>
          <CollectionPreview {...otherCollectionProps} />
        </SlideIn>
      ))}
    </Container>
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
