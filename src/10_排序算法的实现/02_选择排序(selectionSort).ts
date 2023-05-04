import { testSort, swap, measureSort } from 'hy-algokit'

export default function selectionSort(arr: number[]): number[] {
  const n = arr.length

  // 最后一个就不需要比较了，只剩一个的时候默认就是有序的，所以 i 为 n - 1
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i

    // 内层循环找到最小的那一个值的索引
    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }

    if (i !== minIndex) {
      swap(arr, i, minIndex)
    }
  }

  return arr
}

// testSort(selectionSort)
measureSort(selectionSort)
