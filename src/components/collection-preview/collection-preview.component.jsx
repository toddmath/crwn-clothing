import React from 'react';
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
  const match = useRouteMatch();
  const handleHistory = () => history.push(`${match.url}/${routeName}`);

  return (
    <CollectionPreviewContainer>
      <TitleContainer>
        <Title onClick={handleHistory}>{title}</Title>
      </TitleContainer>
      <PreviewContainer>
        {items &&
          items
            .filter((item, idx) => idx < 4)
            .map(item => <CollectionItem key={item.id} item={item} />)}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
