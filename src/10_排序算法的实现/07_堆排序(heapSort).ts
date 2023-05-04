import { testSort, swap, cbtPrint, measureSort } from 'hy-algokit'

export default function heapSort(arr: number[]): number[] {
  // 1.获取数组的长度
  const n = arr.length

  // 2.原地建堆
  // 从第一个非叶子节点开始以此进行下虑操作
  const start = Math.floor(n / 2 - 1)
  for (let i = start; i >= 0; i--) {
    // 进行下虑操作
    percolate_down(arr, n, i)
  }

  // 进行堆排序
  for (let i = n - 1; i > 0; i--) {
    // 把第一个元素和最后一个元素交换，然后再对第一个元素进行下虑操作
    swap(arr, 0, i)
    percolate_down(arr, i, 0)
  }

  return arr
}

/**
 *
 * @param {number[]} arr 对arr进行下滤操作
 * @param {number} n 下滤的范围
 * @param {number} index 需要下滤元素的索引
 */
function percolate_down(arr: number[], n: number, index: number) {
  // 左子节点小于总长度，则一直下滤
  while (2 * index + 1 < n) {
    // 获取左右子节点的索引
    let leftChildIndex = 2 * index + 1
    let rightChildIndex = 2 * index + 2

    let largeChildIndex = leftChildIndex

    // 判断左右子节点那个元素更大
    // 如果右边存在，并且右边更大
    if (rightChildIndex < n && arr[leftChildIndex] < arr[rightChildIndex]) {
      largeChildIndex = rightChildIndex
    }

    // 判断index和largeChildIndex大小
    if (arr[index] >= arr[largeChildIndex]) break

    // 交换
    swap(arr, index, largeChildIndex)
    index = largeChildIndex
  }
}

// testSort(heapSort)
// heapSort([143, 132, 165, 148, 76, 160, 6, 20, 2, 25])

measureSort(heapSort)
