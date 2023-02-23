class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

class LinkedList<T> {
  head: Node<T> | null = null
  private size: number = 0
  get length(): number {
    return this.size
  }

  append(value: T) {
    // 创建一个新节点
    const newNode = new Node(value)
    // 判断链表是否为空
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      // 找到最后一个节点
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }

    this.size++
  }
}

const linkedList = new LinkedList<string>()

linkedList.append('aaa')
console.log(linkedList.length)
console.log(linkedList.head)
linkedList.append('bbb')
console.log(linkedList.length)
console.log(linkedList.head)
linkedList.append('ccc')
console.log(linkedList.length)
console.log(linkedList.head)

export default {}
