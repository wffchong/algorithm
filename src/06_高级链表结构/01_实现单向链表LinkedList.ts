import ILinkedList from './ILinkedList'
import { Node } from './LinkedNode'

export default class LinkedList<T> implements ILinkedList<T> {
  protected head: Node<T> | null = null
  protected length: number = 0

  // 新增属性: 总是指向链表的位置
  protected tail: Node<T> | null = null

  size() {
    return this.length
  }

  peek(): T | undefined {
    return this.head?.value
  }

  protected getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    return current
  }

  // 判断是否是最后一个节点
  private isTail(node: Node<T>) {
    return this.tail === node
  }

  append(value: T) {
    // 创建一个新节点
    const newNode = new Node(value)
    // 判断链表是否为空
    if (!this.head) {
      this.head = newNode
    } else {
      // 最后一个节点指向新节点
      this.tail!.next = newNode
    }
    // 尾巴节点指向新节点
    this.tail = newNode

    this.length++
  }

  traverse() {
    let current = this.head
    let res: T[] = []
    while (current) {
      res.push(current.value)
      if (this.isTail(current)) {
        // 遍历到最后一个
        current = null
      } else {
        // 不是最后一个节点
        current = current.next
      }
    }

    // 循环链表
    if (this.head && this.tail!.next === this.head) {
      res.push(this.head.value)
    }

    console.log(res.join('->'))
  }

  insert(value: T, position: number) {
    // 越界
    if (position < 0 || position > this.length) return false
    // 创建一个新节点
    const newNode = new Node(value)
    if (position === 0) {
      // 将新节点指向原来头节点
      newNode.next = this.head
      // 把头节点指针指向新节点
      this.head = newNode
    } else {
      // 插入到中间位置，尾巴节点就不需要管了
      // 上一个节点
      let previous = this.getNode(position - 1)
      // 找到需要插入的位置
      // 走到这里就代表找到位置了
      newNode.next = previous!.next
      previous!.next = newNode

      // 插到尾巴节点的情况
      if (position === this.length) {
        // 把尾巴节点指向新节点
        this.tail = newNode
      }
    }
    this.length++

    return true
  }

  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size()) return null
    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null

      // 判断是否刚好只有一个节点
      if (this.length === 1) {
        this.tail = null
      }
    } else {
      let previous = this.getNode(position - 1)
      current = previous!.next
      // 找到需要的节点
      previous!.next = previous?.next?.next ?? null

      // 判断是否删除的事最后一个节点
      if (this.length - 1 === position) {
        this.tail = previous
      }
    }

    this.length--

    return current?.value ?? null
  }

  get(position: number): T | null {
    if (position < 0 || position >= this.size()) return null
    return this.getNode(position)?.value ?? null
  }

  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size()) return false
    const currentNode = this.getNode(position)
    if (!currentNode) return false
    currentNode.value = value
    return true
  }

  indexOf(value: T): number {
    let index = 0
    let current = this.head
    while (current) {
      if (current.value === value) {
        return index
      }

      // 判断是否是最后一个节点
      if (this.isTail(current)) {
        current = null
      } else {
        current = current.next
      }

      index++
    }
    return -1
  }

  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  isEmpty() {
    return this.length === 0
  }
}

// const linkedList = new LinkedList<string>()

// linkedList.append('aaa')
// linkedList.append('bbb')
// linkedList.append('ccc')
// linkedList.insert('ddd', 1)
// linkedList.insert('eee', 2)
// linkedList.traverse()
// console.log('linkedList.update', linkedList.update('123', 1))
// console.log('linkedList.update', linkedList.update('123', 10))
// console.log(linkedList.indexOf('aaa'))
// console.log(linkedList.indexOf('aac'))
// linkedList.traverse()

const linkedList = new LinkedList<string>()
// console.log('------------ 测试append ------------')
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.append('ddd')
linkedList.traverse()

// console.log('------------ 测试insert ------------')
linkedList.insert('abc', 0)
linkedList.traverse()
linkedList.insert('cba', 2)
linkedList.insert('nba', 6)
linkedList.traverse()

// // 测试删除节点
// console.log('------------ 测试removeAt ------------')
linkedList.removeAt(0)
linkedList.removeAt(0)
linkedList.traverse()

console.log(linkedList.removeAt(2))
linkedList.traverse()
console.log(linkedList.removeAt(3))
linkedList.traverse()

// console.log('------------ 测试get ------------')
console.log(linkedList.get(0))
console.log(linkedList.get(1))
console.log(linkedList.get(2))

console.log('------------ 测试update ------------')
linkedList.update('why', 1)
linkedList.update('kobe', 2)
linkedList.traverse()

// console.log('------------ 测试indexOf ------------')
console.log(linkedList.indexOf('cba'))
console.log(linkedList.indexOf('why'))
console.log(linkedList.indexOf('kobe'))
console.log(linkedList.indexOf('james'))

console.log('------------ 测试remove ------------')
linkedList.remove('why')
linkedList.remove('cba')
linkedList.remove('kobe')
linkedList.traverse()
console.log(linkedList.isEmpty())
