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

  traverse() {
    let current = this.head
    let res: T[] = []
    while (current) {
      res.push(current.value)
      current = current.next
    }
    console.log(res.join('->'))
  }
}

const linkedList = new LinkedList<string>()

linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.traverse()
export default {}
