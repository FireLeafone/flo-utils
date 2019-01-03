/** 
 * @name paramToObj 参数序列化转对象
 * @param {any} paramsString 
 * @returns 
 */
function paramToObj (paramsString) {
  const search = paramsString;
  if (!search) {
    return {};
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

export default paramToObj;