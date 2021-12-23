/**
 * @name getValueByPath
 * @param {any} entity
 * @param {any} path  a.b.c.d
 * @param {string} [defaultValue=""]
 * @returns
 * @description 通过路径获取数据
 */
function getValueByPath(entity, path, defaultValue = '-') {
  let props = path;
  if (typeof props === 'string') {
    props = props.split('.').filter((d) => d);
  }

  let current = entity;

  for (let i = 0; i < props.length; i += 1) {
    if (current === null || current === undefined) {
      return defaultValue;
    }

    current = current[props[i]];
  }

  if (current === null || current === undefined) {
    return defaultValue;
  }
  return current;
}

export default getValueByPath;
