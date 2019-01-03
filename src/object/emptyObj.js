/**
 * @name emptyObj 判断空对象
 * @param {*} obj
 * @returns
 */
function emptyObj(obj) {
  for (var prop in obj){
    if(obj.hasOwnProperty(prop))
    {
      return false;
    }
  }
  return true;
}

export default emptyObj;