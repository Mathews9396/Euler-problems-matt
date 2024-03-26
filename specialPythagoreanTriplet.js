function specialPythagoreanTriplet(n) {
  let sumOfabc = n;

  let c, product;
  const values = [];
  loop1: for (let a = 1; a < n; a++) {
    loop2: for (let b = a; b < n; b++) {
      // a+b+c=sumOfabc
      c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if (a + b + c == sumOfabc) {
        values.push(a, b, c);
        product = a * b * c;
        break loop1;
      }
    }
  }
  console.log(product, "\n", values);

  return product;
}

specialPythagoreanTriplet(1000);
