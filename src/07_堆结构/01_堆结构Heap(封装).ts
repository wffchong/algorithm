class Heap<T> {
  private data: T[] = []
  private length: number = 0

  insert(value: T) {}

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
