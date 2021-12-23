export function consoleWran(msg) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(msg);
  }
}
