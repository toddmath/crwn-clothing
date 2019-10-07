import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
  Title,
} from './collection-preview.styles';

export const CollectionPreview = ({
  title,
  items,
  history,
  match,
  routeName,
}) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>
        <Title onClick={() => history.push(`${match.path}/${routeName}`)}>
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

export default withRouter(CollectionPreview);
