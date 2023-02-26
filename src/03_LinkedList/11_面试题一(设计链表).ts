// 力扣 707 设计链表

class MyLinkedList<T = any> {
  head: MyNode | null = null
  private size: number = 0

  get length() {
    return this.size
  }

  get(position: number): number {
    console.log('position', position)
    console.log('length', this.length)
    if (position < 0 || position >= this.length) return -1
    if(position === 0) return this.head?.value ?? -1

    let index = 0
    let current = this.head



    // 找到需要的position的位置的值
    while (index++ < position && current) {
      current = current.next
    }
    console.log('current!.value', current!.value)
    return current!.value
  }

  addAtHead(val: number): void {
    const newNode = new MyNode(val)

    // 判断存不存在头节点
    if (!this.head) {
      this.head = newNode
    } else {
      // 新节点指向原来的头节点
      newNode.next = this.head
      this.head = newNode
    }
    this.size++
  }

  addAtTail(val: number): void {
    const newNode = new MyNode(val)
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

  addAtIndex(position: number, val: number): void {
    if (position === 0) {
      this.addAtHead(val)
      // 这里需要return 不然size 会加两次
      return
    } else if (position === this.size) {
      this.addAtTail(val)
      // 这里需要return 不然size 会加两次
      return
    } else if (position < 0 || position > this.size) {
      return
    } else {
      let index = 0
      let current = this.head
      let previous: MyNode | null = null
      const newNode = new MyNode(val)
      // 找到需要插入的位置
      while (index++ < position && current) {
        previous = current
        current = current.next
      }
      previous!.next = newNode
      newNode.next = current
    }
    this.size++
  }
  deleteAtIndex(position: number): void {
    if (position < 0 || position >= this.size) return

    let index = 0
    let current = this.head
    let previous: MyNode | null = null

    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      // 找到需要插入的位置
      while (index++ < position && current) {
        previous = current
        current = current.next
      }
      console.log(previous)
      previous!.next = current?.next ?? null
    }


    this.size--
  }

  traverse() {
    let current = this.head
    let res: number[] = []
    while (current) {
      res.push(current.value)
      current = current.next
    }
    console.log(res.join('->'))
  }
}

class MyNode {
  value: number
  next: MyNode | null = null
  constructor(value: number) {
    this.value = value
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const link = new MyLinkedList()

link.addAtHead(5)
console.log('link.size()', link.length)
link.traverse()
link.addAtIndex(1,2)
console.log('link.size()', link.length)
link.traverse()
link.get(1)
link.addAtHead(6)
link.traverse()
link.addAtTail(2)
link.traverse()
link.get(3)
link.addAtTail(1)
link.traverse()
link.get(5)