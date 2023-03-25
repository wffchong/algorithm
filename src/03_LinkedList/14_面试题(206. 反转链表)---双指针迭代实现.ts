import { ListNode } from './types/ListNode'

function reverseList(head: ListNode | null): ListNode | null {
  // 判断头节点是否为空和是否只有一个节点
  if (!head || !head.next) return head

  // 创建两个指针，一个指向头节点，一个指向null，为了避免失去后面链表的引用，可以先用一个变量保存后面的引用
  let current: ListNode | null = head // 当前节点
  let prev: ListNode | null = null // 当前节点的前一个节点prev
  while (current) {
    // 先将当前节点的下一个节点保存下来
    const temp: ListNode | null = current.next
    // 将当前节点的next指向它的前一个节点
    current.next = prev
    // 迭代更新前一个节点
    prev = current

    // 迭代更新当前节点
    current = temp
  }
  return prev
}

const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)
console.log(reverseList(node1))
