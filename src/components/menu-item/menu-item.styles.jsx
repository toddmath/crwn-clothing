import styled from 'styled-components/macro';

/* CSS */
export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? '38rem' : '24rem')};
  min-width: 30%;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid black;
  margin: 0 0.75rem 1.5rem;
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
    margin-right: 0.75rem;
  }

  &:last-child {
    margin-left: 0.75rem;
  }

  @media screen and (max-width: 55rem) {
    flex: ${({ size }) => (size ? '1 1 100%' : '1 1 auto')};
    height: ${({ size }) => (size ? '26rem' : '20rem')};
    margin: 0;
    width: 100%;
  }

  @media screen and (max-width: 30rem) {
    margin: 0;
  }
`;

export const MenuItemContainer2 = styled.div`
  height: ${({ size }) => (size ? '38rem' : '24rem')};
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
    margin-right: 0.75rem;
  }

  &:last-child {
    margin-left: 0.75rem;
  }

  @media screen and (max-width: 55rem) {
    flex: 1 1 50%;
    height: 20rem;
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
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  @media screen and (max-width: 55rem) {
    height: 8rem;
    padding: 0 1.8rem;
  }

  @media screen and (max-width: 30rem) {
    height: 7rem;
    padding: 0 1.2rem;
  }
`;

/* CSS */
export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 0.6rem;
  font-size: 2.2rem;
  color: #4a4a4a;

  @media screen and (max-width: 55rem) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
  }
`;

/* CSS */
export const ContentSubTitle = styled.span`
  font-weight: lighter;
  font-size: 1.6rem;

  @media screen and (max-width: 55rem) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 1.4rem;
  }
`;
