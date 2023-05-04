import { testSort, measureSort } from 'hy-algokit'

export default function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr

  const mid = arr.length >> 1

  // 切割数组
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  // 递归切割 leftArr 和 rightArr
  const newLeftArr = mergeSort(leftArr)
  const newRightArr = mergeSort(rightArr)

  // 合并数组
  const newArr: number[] = []
  let i = 0
  let j = 0

  while (i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] <= newRightArr[j]) {
      newArr.push(newLeftArr[i])
      i++
    } else {
      newArr.push(newRightArr[j])
      j++
    }
  }

  // 判断是否一边还有剩余
  if (i < newLeftArr.length) {
    newArr.push(...newLeftArr.slice(i))
  }

  if (j < newRightArr.length) {
    newArr.push(...newRightArr.slice(j))
  }

  return newArr
}

// testSort(mergeSort)
measureSort(mergeSort, 1000000)
