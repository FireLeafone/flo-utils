import drawLineArrow from '../drawLineArrow';

describe('draw line arrow', () => {
  it('line path', () => {
    expect(drawLineArrow(100, 100, 300, 300)).toBe("M100,100 L200,200 L197,190 L200,200 L190,196 L200,200 L300,300");
  });
});