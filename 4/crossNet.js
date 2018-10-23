// 函数判断
function isFunction(fn) {
  return Object.prototype.toString.call(fn) === '[object Function]'
}