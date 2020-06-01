import { createEnum } from '../../helpers';

export const INITIAL_STATE = createEnum({
  sections: [
    {
      title: 'hats',
      imageUrl: '/images/hats.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: '/images/jackets.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: '/images/sneakers.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: '/images/womens.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: '/images/men.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
});

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
