const POSITION = Object.freeze({
  left: 'left',
  right: 'right',
  both: 'both',
  center: 'center',
  all: 'all',
});

/**
 *
 * 字符串去空
 * @param {*} str
 * @param {*} [position=POSITION.both]
 * @returns
 */
function trim(sr, position = POSITION.both) {
  let str = sr;
  if (typeof str !== 'string') return str;
  if (!POSITION[position]) {
    console.warn('unexpected position value');
    return str;
  }

  switch (position) {
    case POSITION.left:
      str = str.replace(/^[\t\n\v\r\f\s]+/, '');
      break;
    case POSITION.right:
      str = str.replace(/[\t\n\v\r\f\s]+$/, '');
      break;
    case POSITION.both:
      str = str.replace(/^[\t\n\v\r\f\s]+/, '').replace(/[\t\n\v\r\f\s]+$/, '');
      break;
    case POSITION.center:
      while (str.match(/\w[\t\n\v\r\f\s]+\w/)) {
        str = str.replace(/(\w)([\t\n\v\r\f\s]+)(\w)/, `$1$3`);
      }
      break;
    case POSITION.all:
      str = str.replace(/[\t\n\v\r\f\s]/g, '');
      break;
    default:
  }

  return str;
}

export default trim;
