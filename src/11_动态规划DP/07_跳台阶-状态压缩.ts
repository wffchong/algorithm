function jump(n: number): number {
  // 定义初态
  let prev = 1
  let cur = 1

  for (let i = 2; i <= n; i++) {
    const newValue = prev + cur
    prev = cur
    cur = newValue
  }
  return cur
}

console.log('jump(10)', jump(10))

export {}
