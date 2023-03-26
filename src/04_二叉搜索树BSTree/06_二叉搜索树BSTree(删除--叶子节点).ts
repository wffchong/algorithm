import Node from './types/Node'

import { btPrint } from 'hy-algokit'

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null

  // 当前节点的父节点
  parent: TreeNode<T> | null = null

  // 判断当前节点是父节点的左子节点
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this)
  }

  // 判断当前节点是父节点的右子节点
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this)
  }
}

class BSTree<T> {
  private root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }

  // 查找节点
  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    let parent: TreeNode<T> | null = null
    while (current) {
      // 1.如果找到current, 直接返回即可
      if (current.value === value) {
        return current
      }

      // 2.继续向下找
      parent = current
      if (current.value < value) {
        current = current.right
      } else {
        current = current.left
      }

      // 如果current有值, 那么current保存自己的父节点
      if (current) current.parent = parent
    }

    return null
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

  // 最大值
  getMaxValue(): T | null {
    let current = this.root

    while (current && current.right) {
      current = current.right
    }

    return current?.value ?? null
  }

  // 最小值
  getMinValue(): T | null {
    let current = this.root

    while (current && current.left) {
      current = current.left
    }

    return current?.value ?? null
  }

  // 搜索值
  search(value: T): boolean {
    return !!this.searchNode(value)
  }

  // 删除  ->> 删除操作非常的复杂，分为很多情况
  /**
   * 1.删除叶子节点，这种也是最简单的
   * 2.删除的节点有一个子节点
   * 3.删除的节点有两个子节点
   *
   * 要实现删除操作，需要知道三个很重要的先行条件。
   * 1.当前需要删除的值是否存在，不存在直接返回false
   * 2.当前删除节点的父级节点 （这个操作可以在搜索的过程中完成）
   * 3.当前删除的节点是其父节点的左还是右节点
   *
   */
  remove(value: T): boolean {
    // 1.搜索: 当前是否有这个value
    const current = this.searchNode(value)

    if (!current) return false

    // 删除叶子节点
    if (!current.left && !current.right) {
      // 根节点
      if (current === this.root) {
        this.root = null
        return true
        // 删除的是父节点的左边
      } else if (current.isLeft) {
        current.parent!.left = null
      } else {
        current.parent!.right = null
      }
    }
    return true
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
// bst.levelOrderTraverse()
// console.log('bst.getMaxValue()', bst.getMaxValue())
// console.log('bst.getMinValue()', bst.getMinValue())
console.log('bst.search(100)', bst.search(100))
console.log('bst.search(25)', bst.search(25))

export {}
