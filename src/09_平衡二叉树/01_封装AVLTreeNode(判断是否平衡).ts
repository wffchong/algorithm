import { TreeNode } from './00_二叉搜索树BSTree'

class AVLTreeNode<T> extends TreeNode<T> {
  // 保证获取到的left/right节点的类型是AVLTreeNode
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: AVLTreeNode<T> | null = null

  // 获取某一个节点的高度
  private getHeight(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0
    return Math.max(leftHeight, rightHeight) + 1
  }

  /**
   *
   *  @description 获取某一个节点的权重，权重是左边高度与右边高度高度差
   * @private
   * @return {*}  {number}
   * @memberof AVLTreeNode
   */
  private getBalanceFactor(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0
    return leftHeight - rightHeight
  }

  // 判断当前节点是否平衡
  get isBalanced(): boolean {
    const factor = this.getBalanceFactor()
    // 只有高度差小于等于 1 就是平衡的
    return Math.abs(factor) <= 1
  }
}

const avlNode1 = new AVLTreeNode(10)
avlNode1.right = new AVLTreeNode(15)
avlNode1.right.right = new AVLTreeNode(20)

// console.log(avlNode1.getHeight())
// console.log(avlNode1.right.getHeight())
// console.log(avlNode1.right.right.getHeight())
console.log(avlNode1.isBalanced)
console.log(avlNode1.right.isBalanced)
