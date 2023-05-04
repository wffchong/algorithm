import { swap, testSort, measureSort } from 'hy-algokit'

export default function quickSort(arr: number[]): number[] {
  partition(0, arr.length - 1)

  function partition(left: number, right: number) {
    if (left >= right) return

    // 找到 pivot 基准元素
    let pivot = arr[right]
    let i = left
    let j = right - 1

    while (i <= j) {
      // 从左边开始找到第一个比 pivot 大的元素
      while (arr[i] < pivot) {
        i++
      }
      // 从右边开始找到第一个比 pivot 小的元素
      while (arr[j] > pivot) {
        j--
      }

      // 说明已经找到了(比pivot大的元素i)和(比pivot小的j的元素) -- 交换
      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }

    // 跳出while循环后 ，j 会比 i 小 1,且pivot应该放到 i 的位置
    // 将pivot元素放到正确的位置
    swap(arr, i, right)

    // 左边区域递归
    partition(left, j)
    // 右边区域递归
    partition(i + 1, right)
  }

  return arr
}

// const arr = [20, 2, 9, 7, 12, 15, 1, 6, 8]
// quickSort(arr)
// testSort(quickSort)

// 20 2 9 7 12 15 1 6  8
// 6  2 9 7 12 15 1 20 8
// 6  2 1 7 12 15 9 20 8
// 6  2 1 7 8  15 9 20 12
measureSort(quickSort, 1000000)
