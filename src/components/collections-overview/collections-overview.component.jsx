import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';
import {
  CollectionsOverviewContainer,
  CollectionPreviewContainer,
} from './collections-overview.styles';

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export const CollectionsOverview = () => {
  const { collections } = useSelector(mapStateToProps);

  return (
    <CollectionsOverviewContainer>
      {collections &&
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreviewContainer key={id}>
            <CollectionPreview {...otherCollectionProps} />
          </CollectionPreviewContainer>
        ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
