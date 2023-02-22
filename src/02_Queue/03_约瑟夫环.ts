// 圆圈中最后剩下的数字
// 使用队列实现的话会超时，力扣通过不了，时间复杂度太大了

import { ArrayQueue } from './01_实现队列结构'

function lastRemaining(n: number, m: number): number {
  const queue = new ArrayQueue<number>()

  for (let i = 0; i < n; i++) {
    queue.enqueue(i)
  }

  while (queue.size() > 1) {
    for (let i = 1; i < m; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()
  }

  return queue.peek()
}

console.log(lastRemaining(5, 3))
console.log(lastRemaining(10, 17))
console.log(lastRemaining(70866, 116922))
