import downloadLink from '../src/downloadLink';

describe('a download', () => {
  it('no url', () => {
    expect(downloadLink()).toBeFalsy();
  });
});
