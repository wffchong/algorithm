import { IStack } from './IStack'

export class ArrayStack<T> implements IStack<T> {
  private data: Array<T> = []
  push(element: T) {
    this.data.push(element)
  }
  pop(): T | undefined {
    return this.data.pop()
  }
  peak() {
    return this.data[this.data.length - 1]
  }
  isEmpty() {
    return this.data.length === 0
  }
  size() {
    return this.data.length
  }
}
