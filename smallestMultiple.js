/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
 *
 * smallestMult(5) should return a number.
 * smallestMult(5) should return 60.
 * smallestMult(7) should return 420.
 * smallestMult(10) should return 2520.
 * smallestMult(13) should return 360360.
 * smallestMult(20) should return 232792560.
 */

function findHCF(x, y) {
  return !y ? x : findHCF(y, x % y);
}

function findLCM(a, b) {
  return (a * b) / findHCF(a, b);
}

function leastCommonMultiple(number) {
  let multiple = 1;
  for (let i = 1; i <= number; i++) {
    multiple = findLCM(multiple, i);
  }
  console.log(multiple);
  return multiple;
}

leastCommonMultiple(13); // => 360360
