import { ArrayQueue } from './01_实现队列结构'

function hotPotato(names: string[], num: number) {
  const queue = new ArrayQueue<string>()

  // 将所有的name入队
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i])
  }

  while (queue.size() > 1) {
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()!
      queue.enqueue(name)
    }
    queue.dequeue()
  }
  return queue.peek()
}

console.log(hotPotato(['why', 'james', 'kobe', 'curry', 'abc', 'cba', 'nba', 'mba'], 4))
