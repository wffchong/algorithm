function maxProfit(prices: number[]): number {
  const n = prices.length
  let preValue = 0

  let minPrice = prices[0]
  for (let i = 1; i < n; i++) {
    // 当前i位置 - 前一个最小值
    // 这里可以压缩的原因: i位置的值, 只和前一个位置有关系
    preValue = Math.max(preValue, prices[i] - minPrice)
    minPrice = Math.min(prices[i], minPrice)
  }
  return preValue
}

console.log(maxProfit([7, 1, 5, 3, 6, 0, 4]))

export {}
