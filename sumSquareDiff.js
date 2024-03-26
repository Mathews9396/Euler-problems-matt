/**
 * The sum of the squares of the first ten natural numbers is,
 * 1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)^2 = 552 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
 *
 *   sumSquareDifference(10) should return a number.
 *   sumSquareDifference(10) should return 2640.
 *   sumSquareDifference(20) should return 41230.
 *   sumSquareDifference(100) should return 25164150.
 */

function sumSquareDifference(n) {
  //   const sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

  //   const squareOfSums = Math.pow((n * (n + 1)) / 2, 2);

  //   const diff = squareOfSums - sumOfSquares;
  //   console.log(`The difference of squareOfSums ${squareOfSums} and sumOfSquares ${sumOfSquares} is ${diff}`);

  //   //   const diffUsingFormula = ((Math.pow(n, 2) - n - 1) * (Math.pow(n, 2) + n)) / 4;
  const diffUsingFormula = ((3 * Math.pow(n, 2) - n - 2) * (Math.pow(n, 2) + n)) / 12;

  console.log(`diffUsingFormula - ${diffUsingFormula}`);

  return diff;
}

sumSquareDifference(10);
