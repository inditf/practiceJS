var findMax = Math.max.bind(null);
console.log(findMax);//[Function: bound max]
console.log(findMax(1, 2, 3))//3
console.log(findMax(4, 5, 6))//6