import { swap, testSort, measureSort } from 'hy-algokit'

export default function quickSort(arr: number[]): number[] {
  partition(0, arr.length - 1)

  function partition(left: number, right: number) {
    if (left > right) return

    // 找到 pivot 基准元素
    let pivot = arr[left]
    let i = left
    let j = right

    while (i != j) {
      // j指针往左边移动的条件是，j对应的元素大于轴心元素，并且 i < j
      while (arr[j] >= pivot && i < j) {
        j--
      }
      // i指针往右边移动的条件是，j停止移动，i对应的元素小于轴心元素，并且 i < j
      while (arr[i] <= pivot && i < j) {
        i++
      }

      // 找到了 符合条件的 i 和 j
      swap(arr, i, j)
    }

    // 跳出循环代表 i == j，交换轴心元素和 i 的位置
    swap(arr, left, i)

    // 左边区域递归
    partition(left, i - 1)
    // 右边区域递归
    partition(i + 1, right)
  }

  return arr
}

// const arr = [20, 2, 9, 7, 5, 15, 1, 6, 8]
// quickSort(arr)
testSort(quickSort)

// 20 2 9 7 5 15 1 6  8
// 6  2 9 7 5 15 1 20 8
// 6  2 1 7 5 15 9 20 8
// 6  2 1 7 8  15 9 20 12
measureSort(quickSort, 1000000)
