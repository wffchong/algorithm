import Heap from '../07_堆结构/06_堆结构Heap(二叉堆)'

class PriorityNode<T> {
  value: T
  priority: number

  constructor(value: T, priority: number) {
    this.value = value
    this.priority = priority
  }

  valueOf() {
    return this.priority
  }
}

class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap()

  enqueue(value: T, priority: number) {
    const newNode = new PriorityNode(value, priority)
    this.heap.insert(newNode)
  }

  dequeue(): T | undefined {
    return this.heap.extract()?.value
  }

  peek(): T | undefined {
    return this.heap.peek()?.value
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

const priorityQueue = new PriorityQueue()

priorityQueue.enqueue('aaa', 100)
priorityQueue.enqueue('bbb', 98)
priorityQueue.enqueue('ccc', 99)
while (!priorityQueue.isEmpty()) {
  console.log(priorityQueue.dequeue())
}
