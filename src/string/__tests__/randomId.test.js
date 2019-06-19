import randomId from '../randomId';

const id1 = randomId();
const id2 = randomId();

describe('random id', () => {
  it('id is random', () => {
    expect(id1).not.toEqual(id2);
  });
  it('/^[0-9a-zA-Z]{10,12}$/.test(randomId()) should return true', () => {
    expect(/^[0-9a-zA-Z]{10,12}$/.test(randomId())).toBeTruthy();
  });
});