import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';
import {
  CollectionsOverviewContainer,
  CollectionPreviewContainer,
} from './collections-overview.styles';

export const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreviewContainer key={id}>
        <CollectionPreview {...otherCollectionProps} />
      </CollectionPreviewContainer>
    ))}
  </CollectionsOverviewContainer>
);

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number.isRequired,
          imageUrl: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        })
      ),
      routeName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
