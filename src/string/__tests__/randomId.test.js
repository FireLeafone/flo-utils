import randomId from '../randomId';

const id1 = randomId();
const id2 = randomId();

describe('random id', () => {
  it('id is random', () => {
    expect(id1).not.toEqual(id2);
  });
});