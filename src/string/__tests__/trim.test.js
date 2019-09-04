import trim from '../trim';

describe('random id', () => {
  it('all trim', () => {
    expect(trim(" s t r ", "all")).toBe("str");
  });
  it('left trim', () => {
    expect(trim(" s t r ", "left")).toBe("s t r ");
  });
  it('right trim', () => {
    expect(trim(" s t r ", "right")).toBe(" s t r");
  });
  it('both trim', () => {
    expect(trim(" s t r ", "both")).toBe("s t r");
  });
  it('center trim', () => {
    expect(trim(" s t r ", "center")).toBe(" str ");
  });
  it('default trim', () => {
    expect(trim(" s t r ")).toBe("s t r");
  });
  it('err trim', () => {
    expect(trim(" s t r ", 'ee')).toBe(" s t r ");
  });
});