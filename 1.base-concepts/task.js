"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  const d = b*b-4*a*c;
    if (d < 0) {
      return arr;
    } else if (d === 0){
      let x = -b/(2*a);
      arr.push(x);
    } else {
      let x1 = (-b + Math.sqrt(d) )/(2*a);
      let x2 = (-b - Math.sqrt(d) )/(2*a);
      arr.push(x1, x2);
    }

   return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}