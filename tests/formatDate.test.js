import formatDate from '../src/formatDate';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

function addLength (n) {
  n = n + '';
  if (n.length < 2) {
    return '0' + n;
  }
  return n;
}

describe('format date', () => {
  it('default format', () => {
    const result = `${year}-${addLength(month)}-${addLength(day)}`;
    expect(formatDate(date)).toBe(result);
  });
  it('format', () => {
    const result = `${year}/${addLength(month)}/${addLength(day)}`;
    expect(formatDate(date, 'YYYY/MM/DD')).toBe(result);
  });
  it('empty param', () => {
    expect(formatDate()).toBe('');
  });
});
