import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer, DirectoryMenuItem } from './directory.styles';

export const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections?.map(({ id, ...otherSectionProps }) => (
      <DirectoryMenuItem key={id}>
        <MenuItem {...otherSectionProps} />
      </DirectoryMenuItem>
    ))}
  </DirectoryMenuContainer>
);

Directory.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      linkUrl: PropTypes.string.isRequired,
      size: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    sections: selectDirectorySections,
  });

export default connect(mapStateToProps)(Directory);
