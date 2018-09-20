/*
Your task is to implement solveEquation function, wihch solves Quadratic equation. Each equality has exact 2 integer solutions. Return those numbers as ordered array.

Example:

  const solutions = solveEquation('2 * x^2 - 10 * x + 12');
  console.log(solutions); // [2, 3]
*/

module.exports = function solveEquation(equation) {
  let a, b, c;
//  equation = a*x*x + bx + c;
 a = Number(equation.slice(0,equation.indexOf("*")));
 b = equation.slice((equation.indexOf("*")+1),equation.lastIndexOf("*"));
 b = Number(b.replace(/^-?[0-9]/g, ""));
 c = equation.slice((equation.lastIndexOf("*")+1));
 c = Number(c.replace(/^-?[0-9]/g, ""));
  a*x*x + bx + c == 0;
  let D = b*b - 4*a*c;
  let d = 2 * a;
  let x1 = (-b + Math.sqrt(D))/d;
  let x2 = (-b - Math.sqrt(D))/d;
  let arr = [];
  arr.push(x1);
  arr.push(x2);
  arr.sort();
  // console.log(arr);
  return arr;
}
