import React from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer, DirectoryMenuItem } from './directory.styles';

export const Directory = () => {
  const sections = useSelector(selectDirectorySections);

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
