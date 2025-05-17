/**
 * Use this array of numbers if you want to
 * manually test your functions
 */
const numbers = [10, 13, 20, 25, 38, 35, 40];

// `greaterThanTwentyFive` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return a new array containing numbers that are greater than or equal to 25.
// example:
// greaterThanTwentyFive(numbers); // => [38, 35, 40]
function greaterThanTwentyFive(numbers: number[]): number[] {
  // write your code here...

  return numbers.filter((arraynumber)=> arraynumber >= 25) ; // replace empty array with what you see is fit
}

let myResults : number[]= greaterThanTwentyFive([2,34,45,45,676,2,18]) 

console.log(myResults)
// `divisibleByFive` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return a new array containing numbers that are divisible by 5.
// example:
// divisibleByFive(numbers); // => [10, 20, 25, 35, 40]
function divisibleByFive(numbers: number[]): number[] {
  // write your code here...

  return numbers.filter((numb)=> numb % 5 === 0 ); // replace empty array with what you see is fit
}

export { greaterThanTwentyFive, divisibleByFive };
