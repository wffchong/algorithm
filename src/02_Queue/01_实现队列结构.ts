export interface IQueue<T> {
  enqueue: (element: T) => void
  dequeue: () => T | undefined
  peek: () => T | undefined
  isEmpty: () => boolean
  size: () => number
}

export class ArrayQueue<T> implements IQueue<T> {
  protected data: Array<T> = []
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
