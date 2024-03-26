/**
 * primeSummation(17) should return a number.
 * primeSummation(17) should return 41.
 * primeSummation(2001) should return 277050.
 * primeSummation(140759) should return 873608362.
 * primeSummation(2000000) should return 142913828922.
 */
// function checkForPrime(number, primeNumbers) {
//   for (const pn of primeNumbers) {
//     if (pn < number / 2 && number % pn == 0) return false;
//   }
//   return true;
// }

// function primeSummation(n) {
//   const startTime = Date.now();
//   const primeNumbers = [2, 3, 5, 7];
//   let summationOfPrimes = 0;
//   if (n <= 10) {
//     for (const pn of primeNumbers) {
//       if (pn < n) summationOfPrimes += pn;
//     }
//     return summationOfPrimes;
//   } else {
//     for (const pn of primeNumbers) {
//       summationOfPrimes += pn;
//     }
//   }
//   console.log(primeNumbers, summationOfPrimes);

//   let i = 2;
//   while (primeNumbers[primeNumbers.length - 1] < n) {
//     let numberToCheck1 = 6 * i - 1;
//     let numberToCheck2 = 6 * i + 1;
//     if (!primeNumbers.includes(numberToCheck1)) {
//       if (checkForPrime(numberToCheck1, primeNumbers)) {
//         primeNumbers.push(numberToCheck1);
//         if (numberToCheck1 < n) {
//           summationOfPrimes += numberToCheck1;
//         }
//       }
//     }
//     if (!primeNumbers.includes(numberToCheck2)) {
//       if (checkForPrime(numberToCheck2, primeNumbers)) {
//         primeNumbers.push(numberToCheck2);
//         if (numberToCheck2 < n) {
//           summationOfPrimes += numberToCheck2;
//         }
//       }
//     }
//     i++;
//   }
//   const finalTime = Date.now();
//   console.log(`start time - ${startTime}, final time - ${finalTime}\nTime taken = ${finalTime - startTime}`);
//   console.log("\n\nsummationOfPrimes - ", summationOfPrimes);
//   return summationOfPrimes;
// }

// const result = primeSummation(lder);
// if (result == 142913828922) console.log(`The sum of prime number is same as given in Free code camp`);

// 140759 - 873608362
//expected for 2000000  is 142913828922
