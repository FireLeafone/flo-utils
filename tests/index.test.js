const utils = require('../src');

describe('src func list', () => {
  it('export modules correctly', () => {
    expect(Object.keys(utils)).toMatchSnapshot();
  });
});
