import { getCurrentUser, auth } from './firebase.utils';

describe('getCurrentUser function', () => {
  it('should return a Promise', async () => {
    const mockPromise = new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
    await expect(getCurrentUser()).toEqual(mockPromise);
  });
});
