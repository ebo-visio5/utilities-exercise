const {largeNumber, cut3} = require('./module/app');
const check = require('./module/mod');

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const largestNumber = largeNumber(arr1)
console.log(largestNumber)

const cut = cut3(arr2)
console.log(cut)

const add = check.sum(arr1)
console.log(add)

const join = check.concat(arr1, arr2)
console.log(join)
