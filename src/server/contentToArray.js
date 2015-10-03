// Object.prototype.toType = function() {
//   return ({}).toString.call(this).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
// }
var stringg = '/1,2,3,4/,5//a,6,7,8'

var stringArr = stringg.split('//');

var arr1 = stringArr[0].split(',');
var arr2 = stringArr[1].split(',');
console.log(arr1[0],arr2);