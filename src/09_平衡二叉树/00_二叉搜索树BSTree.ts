// import Node from './types/Node'

import { btPrint } from 'hy-algokit'

class Node<T> {
  value: T
  constructor(value: T) {
    this.value = value
  }
}

export class TreeNode<T> extends Node<T> {
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

export class BSTree<T> {
  protected root: TreeNode<T> | null = null

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

  // 创建节点
  protected createNode(value: T): TreeNode<T> {
    return new TreeNode(value)
  }

  // 让子类重写就好
  protected checkBalance(node: TreeNode<T>) {}

  // 插入
  insert(value: T) {
    // 1.根据传入value创建Node(TreeNode)节点
    const newNode = this.createNode(value)

    // 2.判断当前是否已经有了根节点
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }

    // 检查树是否平衡
    this.checkBalance(newNode)
  }

  // 插入
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      // node 的左边没有值
      if (node.left === null) {
        node.left = newNode
        // 处理下父节点
        newNode.parent = node
      } else {
        // node 的左边已经有值了
        this.insertNode(node.left, newNode)
      }
    } else {
      // node 的右边没有值
      if (node.right === null) {
        node.right = newNode
        // 处理下父节点
        newNode.parent = node
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

  /**
   *
   * @description 删除操作，获取后继节点，找到当前需要删除的右边的最接近的值，就是后继节点
   * @private
   * @memberof BSTree
   */
  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    // 获取右子树
    let current = delNode.right
    let successor: TreeNode<T> | null = null

    while (current) {
      successor = current
      current = current.left
      // 保存后继节点的parent
      if (current) {
        current.parent = successor
      }
    }

    // 拿到了后继节点
    // 判断后继节点是不是刚好就是需要删除节点的右节点,（说明后面都没有左节点了）
    if (successor !== delNode.right) {
      successor!.parent!.left = successor?.right ?? null // 后继节点的left肯定为null，right可能为null
      successor!.right = delNode.right
    }

    // 一定要进行的操作: 将删除节点的left, 赋值给后继节点的left
    successor!.left = delNode.left

    return successor!
  }

  remove(value: T): boolean {
    // 1.搜索: 当前是否有这个value
    const current = this.searchNode(value)

    if (!current) return false

    let replaceNode: TreeNode<T> | null = null

    // 删除叶子节点
    if (!current.left && !current.right) {
      replaceNode = null
    } else if (current.left && !current.right) {
      // 只有一个子节点，并且是左子节点
      replaceNode = current.left
    } else if (!current.left && current.right) {
      // 只有一个子节点，并且是右子节点
      replaceNode = current.right
    } else {
      // 有两个子节点，这种情况就很复杂了，我们需要先找到当前的节点的前驱或者后继节点
      const successor = this.getSuccessor(current)
      replaceNode = successor
    }

    if (current === this.root) {
      this.root = replaceNode
    } else if (current.isLeft) {
      current.parent!.left = replaceNode
    } else {
      current.parent!.right = replaceNode
    }
    return true
  }
}

export {}
