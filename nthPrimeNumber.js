/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the nth prime number?
 * 2, 3,    5, 7,     11, 13,     17, 19,     23, 29,     31, 37,     41, 43,    47, 53,     59, 61,     67,71,     73, 79, 83, 89
 *1         2           3           4           5           6           7           8           9           10
 * 3rd- 5 (6*1-1), 4th - 7 (6*1+1), 6th - 13 (6*2+1), 8th - 19(6*3+1), 9th - 23(6*4-1)     10th - 29 (6*5-1)
 *
 * nthPrime(6) should return a number.
 * nthPrime(6) should return 13. 6*2+1
 * nthPrime(10) should return 29. 6*5-1
 * nthPrime(100) should return 541. 6*80+1
 * nthPrime(1000) should return 7919. 6*1320-1
 * nthPrime(10001) should return 104743. 6*17457 +1
 */

function checkForPrime(number, primeNumbers) {
  for (const pn of primeNumbers) {
    if (pn < number / 2 && number % pn == 0) return false;
  }
  return true;
}

function nthPrime(n) {
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  if (n <= primeNumbers.length) return primeNumbers[n - 1];

  let i = 5;
  while (n >= primeNumbers.length) {
    let numberToCheck1 = 6 * i - 1;
    let numberToCheck2 = 6 * i + 1;
    if (!primeNumbers.includes(numberToCheck1)) {
      if (checkForPrime(numberToCheck1, primeNumbers)) primeNumbers.push(numberToCheck1);
    }
    if (!primeNumbers.includes(numberToCheck2)) {
      if (checkForPrime(numberToCheck2, primeNumbers)) primeNumbers.push(numberToCheck2);
    }
    i++;
  }
  console.log(primeNumbers, "\n\n", primeNumbers[n - 1]);

  return true;
}

nthPrime(100);
