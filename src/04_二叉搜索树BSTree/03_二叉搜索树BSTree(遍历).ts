import Node from './types/Node'

import { btPrint } from 'hy-algokit'

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
}

class BSTree<T> {
  private root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }

  // 插入
  insert(value: T) {
    // 1.根据传入value创建Node(TreeNode)节点
    const newNode = new TreeNode(value)

    // 2.判断当前是否已经有了根节点
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  // 插入
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      // node 的左边没有值
      if (node.left === null) {
        node.left = newNode
      } else {
        // node 的左边已经有值了
        this.insertNode(node.left, newNode)
      }
    } else {
      // node 的右边没有值
      if (node.right === null) {
        node.right = newNode
      } else {
        // node 的右边已经有值了
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 先序遍历   ---》根左右
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }

  // 先序遍历   ---》根左右
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }

  // 中序遍历  ---> 左根右
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }

  // 中序遍历  ---> 左根右
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }

  // 后序遍历  ---> 左右根
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  // 后序遍历  ---> 左右根
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }

  // 层序遍历 --> 一层层的遍历
  // 使用队列的思想，把根节点先加入，然后循环队列，以此将当前的左右节点加入到队列，然后一层层的遍历即可
  levelOrderTraverse() {
    if (!this.root) return

    const queue: TreeNode<T>[] = []

    // 第一个节点是根节点
    queue.push(this.root)

    while (queue.length) {
      const current = queue.shift()!
      // 将当前的current打印
      console.log(current.value)
      if (current.left) {
        // 入队
        queue.push(current.left)
      }
      if (current.right) {
        // 入队
        queue.push(current.right)
      }
    }
  }
}

const bst = new BSTree<number>()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

bst.print()

// bst.preOrderTraverse()
// bst.inOrderTraverse()
// bst.postOrderTraverse()
bst.levelOrderTraverse()

export {}
