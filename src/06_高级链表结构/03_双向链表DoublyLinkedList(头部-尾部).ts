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
dLinkedList.postTraverse()
