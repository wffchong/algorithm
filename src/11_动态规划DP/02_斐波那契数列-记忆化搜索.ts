function fib(n: number, memo: number[] = []): number {
  if (n <= 1) {
    return n
  }

  // 求n的值，直接拿返回值即可
  if (memo[n]) {
    return memo[n]
  }

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

console.log('fib(5)', fib(5))

export {}
