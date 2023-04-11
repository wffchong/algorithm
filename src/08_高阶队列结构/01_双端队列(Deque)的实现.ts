import { ArrayQueue } from '../02_Queue/01_实现队列结构'

class ArrayDeque<T> extends ArrayQueue<T> {
  addFront(value: T) {
    this.data.unshift(value)
  }
  removeBack(): T | undefined {
    return this.data.pop()
  }
}

const deque = new ArrayDeque<string>()
deque.addFront('aaa')
deque.addFront('bbb')
deque.addFront('ccc')

while (deque.size() > 0) {
  console.log(deque.removeBack())
}

export {}
