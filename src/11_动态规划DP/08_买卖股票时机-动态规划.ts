function maxProfit(prices: number[]): number {
  const n = prices.length
  const dp = [0]

  let minPrice = prices[0]
  for (let i = 1; i < n; i++) {
    // 第 i 天所能赚到最大的利润是当天的减去前面最小的
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice)
    // 把minPrice每次都更新,取最小的
    minPrice = Math.min(minPrice, prices[i])
  }
  return dp[n - 1]
}

console.log(maxProfit([7, 1, 5, 3, 6, 0, 4]))

export {}
