import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import posed from 'react-pose';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';

const Container = styled(
  posed.div({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 },
  })
)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SlideIn = styled(
  posed.div({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
  })
)`
  ${props => `
  height: ${props.size ? '380px' : '240px'};
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  margin: 7.5px 0;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    flex: ${props.size ? '1 1 100%' : '1 1 auto'};
    height: ${props.size ? '260px' : '200px'};
    margin ${props.size ? '6px 0 0 0' : '1px'};
  }
  `}
`;

export const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    <Container>
      {sections.map(({ id, ...otherSectionProps }) => (
        <SlideIn key={id} {...otherSectionProps}>
          <MenuItem {...otherSectionProps} />
        </SlideIn>
      ))}
    </Container>
  </DirectoryMenuContainer>
);

const mapStateToProps = () =>
  createStructuredSelector({
    sections: selectDirectorySections,
  });

export default connect(mapStateToProps)(Directory);
