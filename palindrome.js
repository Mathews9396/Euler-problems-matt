/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99
 * Find the largest palindrome made from the product of two n-digit numbers.
 *
 * largestPalindromeProduct(2) should return a number.
 * Passed:largestPalindromeProduct(2) should return 9009.
 * Passed:largestPalindromeProduct(3) should return 906609.
 */
function checkPrime(number) {
  let sum = 0;
  var numberToCheck = number;

  while (numberToCheck > 0) {
    sum = sum * 10 + (numberToCheck % 10);
    numberToCheck = parseInt(numberToCheck / 10);
  }
  if (sum == number) {
    return true;
  } else {
    return false;
  }
}

function largestPalindromeProduct(n) {
  let result = 0;
  const maxNumber = Math.pow(10, n) - 1;
  const minNumber = Math.pow(10, n - 1);
  let number1, number2;
  console.log(maxNumber, minNumber);
  let prod = 0,
    isPrime = false;
  loop1: for (let i = maxNumber; i >= minNumber; i--) {
    loop2: for (let j = maxNumber; j >= minNumber; j--) {
      prod = i * j;
      if (checkPrime(prod)) {
        if (prod > result) {
          (number1 = i), (number2 = j);
          result = prod;
        }
        break;
      }
    }
  }
  console.log(result, number1, number2);
  return result;
}

largestPalindromeProduct(3);
