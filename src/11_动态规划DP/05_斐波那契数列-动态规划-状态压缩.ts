function fib(n: number): number {
  // 定义状态1和状态2
  let prev = 0
  let cur = 1

  for (let i = 2; i <= n; i++) {
    const newValue = prev + cur
    prev = cur
    cur = newValue
  }
  return cur
}

console.log('fib(10)', fib(10))
console.log('fib(50)', fib(50))

export {}
