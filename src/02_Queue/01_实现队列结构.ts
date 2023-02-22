import { IQueue } from './IQueue'

export class ArrayQueue<T> implements IQueue<T> {
  private data: Array<T> = []
  enqueue(element: T) {
    this.data.push(element)
  }
  dequeue(): T | undefined {
    return this.data.shift()
  }
  peek() {
    return this.data[0]
  }
  isEmpty() {
    return this.data.length === 0
  }
  size() {
    return this.data.length
  }
}
