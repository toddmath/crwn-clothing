import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer, DirectoryMenuItem } from './directory.styles';

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export const Directory = () => {
  const { sections } = useSelector(mapStateToProps);

  return (
    <DirectoryMenuContainer>
      {sections?.map(({ id, ...otherSectionProps }) => (
        <DirectoryMenuItem key={id}>
          <MenuItem {...otherSectionProps} />
        </DirectoryMenuItem>
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
