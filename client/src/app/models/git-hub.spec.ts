import { GitHub } from './git-hub';

describe('GitHub', () => {
  it('should create an instance', () => {
    expect(new GitHub()).toBeTruthy();
  });
});
