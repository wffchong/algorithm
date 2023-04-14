import Heap from '../07_堆结构/06_堆结构Heap(二叉堆)'

class PriorityQueue<T> {
  private heap: Heap<T> = new Heap()

  enqueue(value: T) {
    this.heap.insert(value)
  }

  dequeue(): T | undefined {
    return this.heap.extract()
  }

  peek(): T | undefined {
    return this.heap.peek()
  }

  isEmpty() {
    return this.heap.isEmpty()
  }

  size() {
    return this.heap.size()
  }

  print() {
    this.heap.print()
  }
}

class Student {
  name: string
  score: number
  constructor(name: string, score: number) {
    this.name = name
    this.score = score
  }

  valueOf() {
    return this.score
  }
}

const priorityQueue = new PriorityQueue()

priorityQueue.enqueue(new Student('aaa', 99))
priorityQueue.enqueue(new Student('bbb', 89))
priorityQueue.enqueue(new Student('ccc', 95))
priorityQueue.enqueue(new Student('ddd', 88))

while (!priorityQueue.isEmpty()) {
  console.log(priorityQueue.dequeue())
}
