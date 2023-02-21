export interface IStack<T> {
  push: (element: T) => void
  pop: () => T | undefined
  peak: () => T | undefined
  isEmpty: () => boolean
  size: () => number
}
