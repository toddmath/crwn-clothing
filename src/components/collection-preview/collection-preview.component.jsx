import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
  Title,
} from './collection-preview.styles';

export const CollectionPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <CollectionPreviewContainer>
      <TitleContainer>
        <Title
          onClick={() => history.push(`${location.pathname}/${routeName}`)}
        >
          {title}
        </Title>
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

export default CollectionPreview;
