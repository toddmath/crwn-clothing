import React, { memo } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
  Title,
} from './collection-preview.styles';

export const CollectionPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  let match = useRouteMatch(); // eslint-disable-line prefer-const

  const handleHistory = () => history.push(`${match.url}/${routeName}`);

  return (
    <CollectionPreviewContainer>
      <TitleContainer>
        <Title onClick={handleHistory}>{title}</Title>
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default memo(CollectionPreview);
