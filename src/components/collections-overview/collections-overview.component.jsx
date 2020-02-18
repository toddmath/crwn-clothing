import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';
import {
  CollectionsOverviewContainer,
  CollectionPreviewContainer,
} from './collections-overview.styles';

export const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

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
