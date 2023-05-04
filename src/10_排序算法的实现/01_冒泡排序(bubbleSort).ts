import { testSort, swap, measureSort } from 'hy-algokit'

export default function bubbleSort(arr: number[]): number[] {
  const n = arr.length

  for (let i = 0; i < n; i++) {
    // 定义一个变量观察是否交换过
    let swapped = false

    // 内层循环找最大值，每次循环过后最大值都被放到了最后面
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = true
      }
    }

    // 如果第一次循环没有交换过，则说明数组原来就是有序的
    if (!swapped) break
  }

  return arr
}

// testSort(bubbleSort)

measureSort(bubbleSort)
