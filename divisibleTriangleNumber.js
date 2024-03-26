/**
 * The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
Let us list the factors of the first seven triangle numbers:

1: 1
3: 1, 3
6: 1, 2, 3, 6
10: 1, 2, 5, 10
15: 1, 3, 5, 15
21: 1, 3, 7, 21
28: 1, 2, 4, 7, 14, 28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over n divisors?

 *  
 * divisibleTriangleNumber(5) should return a number.
 * divisibleTriangleNumber(5) should return 28.
 * divisibleTriangleNumber(23) should return 630.
 * divisibleTriangleNumber(167) should return 1385280.
 * divisibleTriangleNumber(374) should return 17907120.
 * divisibleTriangleNumber(500) should return 76576500
*/

const start = Date.now();

function getFactorsCount(number) {
  let factors = 1,
    sqrt = Math.sqrt(number);
  for (let x = 2; x < sqrt; x++) {
    if (number % x == 0) factors += 2;
  }
  return factors;
}

function divisibleTriangleNumber(n) {
  let sum = 1,
    i = 2,
    count = 0;
  while (count < n) {
    sum += i;
    //fetch the number of factors for the traingle value
    count = getFactorsCount(sum);
    if (Date.now() - start > 1000) break;
    //if no of factors greater than n return else continue;
    i++;
  }
  return sum;
}

let result = divisibleTriangleNumber(500);
// console.log(result, result == 76576500);
