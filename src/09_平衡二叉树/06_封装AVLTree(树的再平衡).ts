import { BSTree } from './00_二叉搜索树BSTree'
import { AVLTreeNode } from './04_封装AVLTreeNode(左旋转操作)'

class AVLTree<T> extends BSTree<T> {
  /**
   * @description 树的再次平衡
   * @param root 找到的不平衡的节点
   */
  reBalance(root: AVLTreeNode<T>) {
    // 有四种情况造成节点的不平衡
    const pivot = root.higherChild
    let current = pivot?.higherChild

    let resultNode: AVLTreeNode<T> | null = null

    if (pivot?.isLeft) {
      // 左左情况
      if (current?.isLeft) {
        resultNode = root.leftRotation()
      } else {
        // 左右情况
        pivot.leftRotation()
        resultNode = root.rightRotation()
      }
    } else {
      // 右左情况
      if (current?.isLeft) {
        root.leftRotation()
        resultNode = root.leftRotation()
      } else {
        // 右右情况
        resultNode = root.leftRotation()
      }
    }

    if (!resultNode.parent) {
      this.root = resultNode
    }
  }
}

const avlTree = new AVLTree<number>()

avlTree.insert(10)
avlTree.insert(15)
avlTree.insert(20)
// avlTree.insert(5)
// avlTree.insert(8)

avlTree.print()

// avlTree.remove(15)
// avlTree.print()
