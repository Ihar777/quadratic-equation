/*
Your task is to implement solveEquation function, wihch solves Quadratic equation. Each equality has exact 2 integer solutions. Return those numbers as ordered array.

Example:

  const solutions = solveEquation('2 * x^2 - 10 * x + 12');
  console.log(solutions); // [2, 3]
*/

 module.exports = function solveEquation(equation) {
  let a=0, b=0, c=0, x1=0, x2=0, D=0;
  let arr = [];

let arrfromstr = equation.split(' ');
a = arrfromstr[0];
b = (arrfromstr[3] == '+') ? arrfromstr[4] : arrfromstr[3].concat(arrfromstr[4]);
c = (arrfromstr[7] == '+') ? arrfromstr[8] : arrfromstr[7].concat(arrfromstr[8]);

 D = b*b - 4*a*c;

 x1 = Math.round((-1)*b + Math.sqrt(D))/(2*a);
 x2 = Math.round((-1)*b - Math.sqrt(D))/(2*a);
 if(x1<x2){
 arr.push(x1,x2);
 } else {
  arr.push(x2,x1);
 }

return arr;

}
