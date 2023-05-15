function fib(n: number): number {
  // 1.定义状态
  // dp保留斐波那契数列中每一个位置对应的值(状态)
  // dp[x]表示的就是x位置对应的值(状态)
  // 2.状态转移方程: dp[i] = dp[i-1] + dp[i-2]
  // 状态转移方程一般情况都是写在循环(for/while)中
  // 3.设置初始化状态: dp[0]/dp[1]初始化状态
  // 4.计算最终的结果

  // 1.定义状态

  const dp: number[] = []

  dp[0] = 0
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

console.log('fib(10)', fib(10))
console.log('fib(50)', fib(50))

export {}
