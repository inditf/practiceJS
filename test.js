array = [1, 2, 3]
var findMax = Math.max.bind(array);
console.log(findMax);//[Function: bound max]
console.log(findMax(1))//3
console.log(findMax(4, 5, 6))//6