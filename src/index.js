/*
 * @File: index.js
 * @Project: fl-utils
 * @File Created: Wednesday, 2nd January 2019 4:53:42 pm
 * @Author: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com)
 * -----
 * @Last Modified: Wednesday, 2nd January 2019 4:53:47 pm
 * @Modified By: NARUTOne (wznaruto326@163.com/wznarutone326@gamil.com>)
 * -----
 * @Copyright <<projectCreationYear>> - 2019 bairong, bairong
 * @fighting: code is far away from bug with the animal protecting
 *  ┏┓      ┏┓
 *  ┏┛┻━━━┛┻┓
 *  |           |
 *  |     ━    |
 *  |  ┳┛ ┗┳ |
 *  |          |
 *  |     ┻   |
 *  |           |
 *  ┗━┓     ┏━┛
 *     |      | 神兽保佑 🚀🚀🚀
 *     |      | 代码无BUG！！！
 *     |      ┗━━━┓
 *     |            ┣┓
 *     |            ┏┛
 *     ┗┓┓ ┏━┳┓┏┛
 *      |┫┫   |┫┫
 *      ┗┻┛   ┗┻┛
 */

/**
 * ajax
 */

export {default as filterParams} from './ajax/filterParams';
export {default as paramToObj} from './ajax/paramToObj';
export {default as queryString} from './ajax/queryString';

/**
 * basic
 */

export {default as beNaN} from './basic/beNaN';
export {default as isArray} from './basic/isArray';
export {default as isLength} from './basic/isLength';
export {default as isNull} from './basic/isNull';
export {default as isNumber} from './basic/isNumber';
export {default as isObject} from './basic/isObject';
export {default as isString} from './basic/isString';
export {default as isUndefined} from './basic/isUndefined';

/**
 * array
 */

export {default as maxArrNum} from './array/maxArrNum';
export {default as minArrNum} from './array/minArrNum';
export {default as uniqueArray} from './array/uniqueArray';
export {default as isRepeatArray} from './array/isRepeatArray';

/**
 * collection
 */

export {default as arrayToTree} from './collection/arrayToTree';
export {default as arrayTreeCallBack} from './collection/arrayTreeCallBack';
export {default as deepCopy} from './collection/deepCopy';
export {default as filter} from './collection/filter';
export {default as getNodeByKeyValues} from './collection/getNodeByKeyValues';
export {default as sortTree} from './collection/sortTree';

/**
 * dom
 */

export {default as debounce} from './dom/debounce';
export {default as downloadLink} from './dom/downloadLink';
export {default as drawLineArrow} from './dom/drawLineArrow';

/**
 * format
 */

export {default as antdFormFormat} from './format/antdFormFormat';
export {default as btSize} from './format/btSize';
export {default as formatDate} from './format/formatDate';
export {default as numpoints} from './format/numpoints';

/**
 * object
 */

export {default as emptyObj} from './object/emptyObj';
export {default as isEquivalentObj} from './object/isEquivalentObj';
