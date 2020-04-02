/**
 * @name getValueByPath
 * @param {any} obj
 * @param {any} props  a.b.c.d
 * @param {string} [defaultValue=""]
 * @returns 
 * @description 通过路径获取数据
 */
function getValueByPath (obj, props, defaultValue = "-") {
  if (typeof props === "string") {
    props = props.split(".").filter(d => d);
  }

  if (typeof obj === "undefined" || (!obj && typeof obj !== "undefined" && obj !== 0)) {
    return defaultValue;
  }
  if (!props || props.length === 0) {
    return obj;
  }

  var prop = props.shift();

  if (prop && Object.prototype.hasOwnProperty.call(obj, prop)) {
    return getValueByPath(obj[prop], props, defaultValue);
  }

  return defaultValue;
}

export default getValueByPath;
