import getValueByPath from './getValueByPath';

function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }

  const [path, ...restPath] = paths;

  let clone;
  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = [...entity];
  } else {
    clone = { ...entity };
  }

  // Delete prop if `removeIfUndefined`
  if (
    removeIfUndefined &&
    restPath.length === 1 &&
    value === undefined &&
    clone[path]
  ) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }

  return clone;
}

/**
 * @name setValueByPath
 * @param {any} entity
 * @param {any} path  a.b.c.d
 * @param {string} [value=""]
 * @param {string} [removeIfUndefined=false]
 * @returns
 * @description 通过路径设置值
 */
function setValueByPath(entity, path, value, removeIfUndefined = true) {
  let props = path;
  if (typeof props === 'string') {
    props = props.split('.').filter((d) => d);
  }

  if (!props.length || !entity) return entity;

  // if `removeIfUndefined` and parent object not exist
  if (
    props.length &&
    removeIfUndefined &&
    !getValueByPath(entity, props.slice(0, -1).join('.'), '') // 上一项
  ) {
    return entity;
  }

  return internalSet(entity, props, value, removeIfUndefined);
}

export default setValueByPath;
