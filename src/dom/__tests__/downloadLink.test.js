import downloadLink from '../downloadLink';

describe('a download', () => {
  it('no url', () => {
    expect(downloadLink()).toBeFalsy();
  });
});