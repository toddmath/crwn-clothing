import styled from 'styled-components/macro';

export const DarkModeContainer = styled.div`
  cursor: pointer;
  overflow: auto;
  width: ${props => props.size}px;
  height: ${props => props.size * 0.47}px;
`;

export const DarkModeFlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.size * -0.595}px;
  margin-left: ${props => props.size * -0.32}px;
  width: ${props => props.size * 1.65}px;
  height: ${props => props.size * 1.65}px;
`;
