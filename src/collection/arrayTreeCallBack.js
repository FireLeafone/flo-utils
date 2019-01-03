/**
 * @name arrayTreeCallBack, 树形数组节点callback
 * @param {any} treeNodes 
 * @param {any} Fn 
 * @param {any} options 
 * @returns 
 */
function arrayTreeCallBack (treeNodes, Fn, options) {
  if (!treeNodes || !treeNodes.length) return;
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  
  function treeMap (tree) {
    return tree.map((item, i) => {
      item = Fn(item, i);
      if(item[options.childrenKeyName] && item[options.childrenKeyName].length) {
        const children = item[options.childrenKeyName];
        item[options.childrenKeyName] = treeMap(children);
      }

      return item;
    });
  }

  return treeMap(treeNodes);
}

export default arrayTreeCallBack;