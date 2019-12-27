import { selectCurrentUser } from './user.selectors';

describe('selectCurrentUser selector', () => {
  const mockUsers = { user: { name: 'fred', currentUser: { name: 'Todd' } } };
  it('should always give the same output, given the same inputs', () => {
    expect(selectCurrentUser(mockUsers)).toStrictEqual({ name: 'Todd' });
  });
});
