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
  height: ${props.size ? '38rem' : '24rem'};
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  margin: 0.75rem 0;
  overflow: hidden;

  &:first-child {
    margin-right: 0.75rem;
  }

  &:last-child {
    margin-left: 0.75rem;
  }

  @media screen and (max-width: 55rem) {
    flex: ${props.size ? '1 1 100%' : '1 1 auto'};
    height: ${props.size ? '26rem' : '20rem'};
    margin ${props.size ? '0.6rem 0 0 0' : '0.1rem'};
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
