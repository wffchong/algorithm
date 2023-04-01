import LinkedList from './01_实现单向链表LinkedList'
import { DoublyNode } from './LinkedNode'

class DoublyLinkedList<T> extends LinkedList<T> {
  head: DoublyNode<T> | null = null
  tail: DoublyNode<T> | null = null

  // 从后面插入
  append(value: T) {
    const newNode = new DoublyNode<T>(value)

    // 如果不存在头结点
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // 存在头结点
      // 尾巴节点的next指向新节点
      this.tail!.next = newNode
      // 把新节点的prev指向尾巴节点
      newNode.prev = this.tail
      // 把tail指向最后一个
      this.tail = newNode
    }
    this.length++
  }

  // 从前面插入
  prepend(value: T) {
    const newNode = new DoublyNode<T>(value)

    // 如果不存在头结点
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // 把新节点的next指向原来的头结点
      newNode.next = this.head
      // 把 原来的头结点prev指向新节点
      this.head!.prev = newNode
      // 再把头节点指向新节点
      this.head = newNode
    }
    this.length++
  }

  // 从后面开始遍历
  postTraverse() {
    const values: T[] = []
    let current = this.tail
    while (current) {
      values.push(current.value)
      current = current.prev
    }

    console.log(values.join('->'))
  }

  // 索引插入
  insert(value: T, position: number): boolean {
    // 越界判断
    if (position < 0 || position > this.length) return false

    if (position === 0) {
      this.prepend(value)
    } else if (position === this.length) {
      this.append(value)
    } else {
      const newNode = new DoublyNode(value)
      const current = this.getNode(position) as DoublyNode<T>
      // 把新节点的next指向当前节点的下一个节点
      newNode.next = current
      // 把新节点的prev指向当前节点的上一个节点
      newNode.prev = current.prev
      // 把current的上一节点的next指向新节点
      current.prev!.next = newNode
      // 把当前节点的prev指向新节点
      current.prev = newNode

      this.length++
    }

    return true
  }

  // 索引删除
  removeAt(position: number): T | null {
    // 越界判断
    if (position < 0 || position >= this.length) return null

    let current = this.head
    if (position === 0) {
      if (this.length === 1) {
        this.head = null
        this.tail = null
      } else {
        // 把头结点指向第二个
        this.head = this.head!.next
        // 把头结点的prev置为null
        this.head!.prev = null
      }
    } else if (position === this.length - 1) {
      current = this.tail
      // 把尾巴改成上一个
      this.tail = this.tail!.prev
      this.tail!.next = null
    } else {
      current = this.getNode(position) as DoublyNode<T>
      current.next!.prev = current.prev
      current.prev!.next = current.next
    }
    this.length--

    return current?.value ?? null
  }
}

// 测试append方法
console.log('-------------- append/prepend --------------')
const dLinkedList = new DoublyLinkedList<string>()
dLinkedList.append('aaa')
dLinkedList.append('bbb')
dLinkedList.append('ccc')
dLinkedList.append('ddd')

dLinkedList.prepend('abc')
dLinkedList.prepend('cba')

dLinkedList.traverse()
// dLinkedList.postTraverse()

dLinkedList.insert('why', 0)
dLinkedList.insert('kobe', 7)
dLinkedList.insert('james', 3)

dLinkedList.traverse()
// dLinkedList.postTraverse()

console.log('-------------- removeAt --------------')
dLinkedList.removeAt(0)
dLinkedList.traverse()
dLinkedList.removeAt(7)
dLinkedList.traverse()
dLinkedList.removeAt(2)
dLinkedList.traverse()
dLinkedList.postTraverse()
