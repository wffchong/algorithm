import { ArrayStack } from './01_实现栈结构'

function decimalToBinary(decimal: number): string {
  const stack = new ArrayStack<number>()

  while (decimal > 0) {
    stack.push(decimal % 2)
    decimal = Math.floor(decimal / 2)
  }

  let binary = ''

  while(!stack.isEmpty()){
    binary += stack.pop()
  }

  return binary
}
console.log('decimalToBinary(35)', decimalToBinary(35))
console.log('decimalToBinary(100)', decimalToBinary(100))