import { ListNode } from './types/ListNode'

function reverseList(head: ListNode | null): ListNode | null {
  // 判断头节点是否为空和是否只有一个节点
  if (head === null || head.next === null) return head

  // 找到最后一个节点 , 作为新的头结点
  const newHead = reverseList(head.next)

  // 完成想要做的操作是在这个位置
  // 第一次来到这里的时候, 是倒数第二个节点 --> 因为上面传的是 head.next
  head.next.next = head
  head.next = null

  return newHead
}

const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)
console.log(reverseList(node1))
