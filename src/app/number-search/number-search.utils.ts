/**
 * Checks if an input number is prime
 * @param input - an input number
 * @return {boolean} - true in case of a prime number
 * */
function isPrimeNumber(input: number): boolean {
  for (let i = 2; i * i <= input; i++) {
    if (input % i === 0) {
      return false;
    }
  }

  return input > 1;
}

/**
 * Finds the nearest Fibonacci number which is greater than the input number.
 * @param input - an input number
 * @return {number} - a Fibonacci number
 * */
function findNearestFibonacci(input: number): number {
  let first = 1;
  let second = 1;

  while (second <= input) {
    [first, second] = [second, first + second];
  }

  return second;
}

/**
 * Gets the next Fibonacci number
 * @param fibonacciNumber - current Fibonacci number
 * @return {number} - next Fibonacci number
 * */
function getNextFibonacci(fibonacciNumber: number): number {
  const next = fibonacciNumber * (1 + Math.sqrt(5)) / 2;

  return Math.round(next);
}

/**
 * Finds the next prime Fibonacci number
 * @param input - an input number
 * @return {number}
 * */
export function findNextPrimeFibonacci(input: number): number {
  let nextFibonacci: number = findNearestFibonacci(input);

  while (!isPrimeNumber(nextFibonacci)) {
    nextFibonacci = getNextFibonacci(nextFibonacci);
  }

  return nextFibonacci;
}
