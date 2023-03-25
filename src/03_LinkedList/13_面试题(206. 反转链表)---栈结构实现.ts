import { ListNode } from './types/ListNode'

function reverseList(head: ListNode | null): ListNode | null {
  // 判断头节点是否为空
  if (head === null) {
    return null
  }

  // 判断是否只有一个节点
  if (head.next === null) {
    return head
  }

  let current: ListNode | null = head

  // 创建一个栈结构
  const stack: ListNode[] = []

  while (current) {
    stack.push(current)
    current = current.next
  }

  // 全部入栈完毕，开始出栈
  const newHead: ListNode = stack.pop()!

  let newCurrent: ListNode = newHead
  while (stack.length) {
    const node = stack.pop()!
    newCurrent.next = node
    newCurrent = newCurrent.next
  }

  // 把最后一个出栈的 next 置为 null
  newCurrent.next = null

  return newHead
}

const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)
console.log('reverseList(node1)', reverseList(node1))
