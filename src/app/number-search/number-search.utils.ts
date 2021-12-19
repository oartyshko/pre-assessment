/*
* TODO:
*   - use more meaningful variables and functions names to improve code readability (for instance isPrimeNumber instead of ispnum)
*   - decrease time consuming:
*       a) the prime number check can take O(sqrt(N)) iterations
*       b) finding the nth Fibonacci number can be done without recursion which has higher time (O(2^N)) and space (O(N)) complexity
*   - improve nested if-else statements:
*       if (fib > number && ispnum(fib)) {
*         r = fib;
          break;
*       }
*       l = l + 1;
*   - try to find the nearest Fibonacci number which is greater than the input number before looping.
*     The next Fibonacci number can be found by multiplying the current Fibonacci number and the ratio ((1 + sqrt(5)) / 2)
* */
const ispnum = function(num: number): boolean {
  for(let i = 2; i < num; i++)
    if  (num % i === 0) return false;
  return num > 1;
};

const fibonacci = (num: number): number => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

export function nxtPrmFib(number: number): number {
  let r = 0;
  let l = 1;
  while (true) {
    const fib = fibonacci(l);
    console.log('fib', fib, number);
    if (fib > number) {
      if (ispnum(fib)) {
        r = fib;
        break;
      } else {
        l = l + 1;
        console.warn('bumping to ', fib);
      }
    } else {
      l = l + 1;
      console.warn('bumping to', fib);
    }
  }
  console.warn('Next prime fib ', r);

  return r;
}
