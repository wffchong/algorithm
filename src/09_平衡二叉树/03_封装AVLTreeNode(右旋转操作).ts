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

  private get higherChild(): AVLTreeNode<T> | null {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    if (leftHeight > rightHeight) {
      return this.left
    }

    if (leftHeight < rightHeight) {
      return this.right
    }
    // 一般是不会走到这里的，因为这个函数本来就是要获取更高的那一个孩子的，这里防止后续报错就不返回 null，
    // 当前节点是父节点的左右那一个就返回那一个
    return this.isLeft ? this.left : this.right
  }

  // 右旋转
  rightRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    // 1.处理pivot节点
    const pivot = this.left!
    pivot.parent = this.parent

    // 2.处理pivot的right
    if (pivot.right) {
      pivot.right.parent = this
    }

    // 3.处理this
    pivot.right = this
    this.parent = pivot

    // 4.挂载pivot
    if (!pivot.parent) {
      // pivot直接作为tree的根
      return pivot
    } else if (isLeft) {
      // pivot作为父节点的左子节点
      pivot.parent.left = pivot
    } else if (isRight) {
      // pivot作为父节点的右子节点
      pivot.parent.right = pivot
    }

    return pivot
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
