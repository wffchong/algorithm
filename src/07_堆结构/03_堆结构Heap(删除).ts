import { cbtPrint } from 'hy-algokit'

class Heap<T> {
  private data: T[] = []
  private length: number = 0

  print() {
    cbtPrint(this.data)
  }

  swap(i: number, j: number) {
    let temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  // 上滤
  percolate_up() {
    // 获取最后一个元素的索引
    let index = this.length - 1

    while (index > 0) {
      // 找到父元素的索引
      const parentIndex = Math.floor((index - 1) / 2)
      // 如果父元素大于了当前节点，就已经符合最大堆的特性了
      if (this.data[parentIndex] >= this.data[index]) {
        break
      }
      // 交换位置
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  // 下滤
  percolate_down() {
    let index = 0
    while (index * 2 + 1 < this.length) {
      const leftChildIndex = index * 2 + 1
      const rightChildIndex = index * 2 + 2
      // 判断左边和右边那个节点的值比较大
      let largeChildIndex = leftChildIndex
      if (rightChildIndex < this.length && this.data[leftChildIndex] < this.data[rightChildIndex]) {
        largeChildIndex = rightChildIndex
      }

      // 判断index和largeChildIndex大小
      if (this.data[index] >= this.data[largeChildIndex]) {
        break
      }

      this.swap(index, largeChildIndex)
      index = largeChildIndex
    }
  }

  insert(value: T) {
    this.data.push(value)
    this.length++

    this.percolate_up()
  }

  extract(): T | undefined {
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.length--
      return this.data.pop()!
    }

    // 拿到第一个值
    const topValue = this.data[0]
    // 将最后一个放到第一个
    this.data[0] = this.data.pop()!
    this.length--

    // 进行下虑操作，保持最大堆的特性
    this.percolate_down()

    // 返回第一个值
    return topValue
  }

  peek(): T | undefined {
    return this.data[0]
  }

  size() {
    return this.length
  }

  isEmpty() {
    return this.length === 0
  }

  buildHeap(arr: T[]) {}
}

const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]

const heap = new Heap<number>()
for (const item of arr) {
  heap.insert(item)
}
heap.print()

heap.insert(133)
heap.print()
heap.insert(65)
heap.print()

console.log(heap.extract())
heap.print()

console.log(heap.extract())
heap.print()

export {}
