/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the given number?
 * largestPrimeFactor(2) should return a number.
 * largestPrimeFactor(2) should return 2.
 * largestPrimeFactor(3) should return 3.
 * largestPrimeFactor(5) should return 5.
 * largestPrimeFactor(7) should return 7.
 * largestPrimeFactor(8) should return 2.
 * largestPrimeFactor(13195) should return 29.
 * largestPrimeFactor(600851475143) should return 6857.
 */
function largestPrimeFactor(number) {
  let largestPrime = 2;

  // Divide the number by 2 until it's not divisible by 2.
  while (number % 2 == 0) {
    number /= 2;
  }

  // Check for other prime factors starting from 3.
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i == 0) {
      largestPrime = i;
      number /= i;
    }
  }

  // If the remaining number is a prime greater than 2.
  if (number > 2) {
    largestPrime = number;
  }

  return largestPrime;
}

const result = largestPrimeFactor(600851475143);

console.log(result);
