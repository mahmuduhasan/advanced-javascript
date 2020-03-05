// const numbers = [3,4,5,6,7,8];
// const output =[];
// for(let i= 0 ; i<numbers.length ; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
//Map
// const numbers = [3,4,5,6,7,8];
// const result = numbers.map(function(element){
//     return element * element;
// });
// console.log(result);
//Filter
const numbers = [3,4,5,6,7,8];
const result = numbers.filter(x => x<5);

const isThere = numbers.find(x => x<4);
console.log(result);
console.log(isThere);