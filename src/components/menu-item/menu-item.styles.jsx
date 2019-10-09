import styled from 'styled-components/macro';

/* CSS */
export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? '380px' : '240px')};
  min-width: 30%;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  display: flex;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.11);
      transition: transform 6.4s cubic-bezier(0.1, 0.26, 0.41, 0.87) 38ms;
    }

    & .content {
      opacity: 0.7;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    flex: ${({ size }) => (size ? '1 1 100%' : '1 1 auto')};
    height: ${({ size }) => (size ? '260px' : '200px')};
    margin: unset;
  }
`;

export const MenuItemContainer2 = styled.div`
  height: ${({ size }) => (size ? '380px' : '240px')};
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.11);
      transition: transform 6.4s cubic-bezier(0.1, 0.26, 0.41, 0.87) 38ms;
    }

    & .content {
      opacity: 0.7;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    flex: 1 1 50%;
    height: 200px;
  }
`;

/* CSS */
export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

/* CSS */
export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  @media screen and (max-width: 800px) {
    height: 80px;
    padding: 0 18px;
  }

  @media screen and (max-width: 400px) {
    height: 70px;
    padding: 0 12px;
  }
`;

/* CSS */
export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }

  @media screen and (max-width: 400px) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

/* CSS */
export const ContentSubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;
