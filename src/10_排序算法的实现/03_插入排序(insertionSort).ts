import { testSort, measureSort } from 'hy-algokit'

export default function insertionSort(arr: number[]): number[] {
  const n = arr.length

  // i 从 1 开始，因为第0个默认是有序的
  for (let i = 1; i < n; i++) {
    const newNum = arr[i]

    let j = i - 1
    while (arr[j] > newNum && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = newNum
  }

  return arr
}

// testSort(insertionSort)
measureSort(insertionSort)
