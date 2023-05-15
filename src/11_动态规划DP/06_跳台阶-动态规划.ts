function jump(n: number): number {
  // 定义初态
  // 可以直接把 n = 0 设置为 1 ,一级台阶肯定是1，那么二级台阶就是 2，因为下标是从0开始的
  const dp: number[] = [1, 1]

  for (let i = 2; i <= n; i++) {
    // 状态转移方程 --》 第 i 阶 只能由 前面一阶或者两阶跳上来，所以找到前面两种方法种树之和
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

console.log('jump(10)', jump(10))

export {}
