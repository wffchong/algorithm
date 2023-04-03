class Heap<T> {
  data: T[] = []
  private length: number = 0

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

  insert(value: T) {
    this.data.push(value)
    this.length++

    this.percolate_up()
  }

  extract(): T | undefined {
    return undefined
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
console.log(heap.data)

heap.insert(133)
console.log(heap.data)
heap.insert(65)
console.log(heap.data)

console.log(heap.extract())

export {}
