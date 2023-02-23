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

  private getPositionNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    return current
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

  insert(value: T, position: number) {
    // 创建一个新节点
    const newNode = new Node(value)
    // 越界
    if (position < 0 || position > this.length) return false
    if (position === 0) {
      // 将新节点指向原来头节点
      newNode.next = this.head
      // 把头节点指针指向新节点
      this.head = newNode
    } else {
      // 上一个节点
      let previous = this.getPositionNode(position - 1)
      // 找到需要插入的位置
      // 走到这里就代表找到位置了
      newNode.next = previous!.next
      previous!.next = newNode
    }
    this.size++

    return true
  }

  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) return null
    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      let previous = this.getPositionNode(position - 1)
      // 找到需要的节点
      previous!.next = previous?.next?.next ?? null
    }

    this.size--

    return current?.value ?? null
  }

  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null
    return this.getPositionNode(position)?.value ?? null
  }

  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false
    const currentNode = this.getPositionNode(position)
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
      index++
      current = current.next
    }
    return -1
  }

  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  isEmpty() {
    return this.size === 0
  }
}

const linkedList = new LinkedList<string>()

linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.insert('ddd', 1)
linkedList.insert('eee', 2)
linkedList.traverse()
console.log('linkedList.update', linkedList.update('123', 1))
console.log('linkedList.update', linkedList.update('123', 10))
console.log(linkedList.indexOf('aaa'))
console.log(linkedList.indexOf('aac'))
linkedList.traverse()
export default {}
