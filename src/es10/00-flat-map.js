const array = [1,1,1,2,3,4,4,5,[1,2,5,6,[1,4,8,9,20]]];
console.log(array.flat(3));

//flatmap
const array2 = [1,2,3,4,5,6,7,8];
console.log(array2.flatMap(v => [v, v*2]));

