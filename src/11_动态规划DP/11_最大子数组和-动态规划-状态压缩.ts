function maxArray(nums: number[]): number {
  const n = nums.length

  let prev = nums[0]
  let max = prev

  for (let i = 1; i < n; i++) {
    prev = Math.max(nums[i], prev + nums[i])
    max = Math.max(max, prev)
  }

  return max
}

console.log(maxArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

export {}
