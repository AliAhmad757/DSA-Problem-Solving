function factorial(n) {
  let fact = n === 0 ? 1 : n;
  for (let i = n - 1; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(7));
