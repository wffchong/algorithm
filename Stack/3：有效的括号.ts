import { ArrayStack } from './1：实现栈结构'

function isValid(s: string): boolean {
  if (s.length % 2 === 1) return false
  const stack = new ArrayStack<string>()
  for (let i = 0; i < s.length; i++) {
    const val = s[i]
    switch (val) {
      case '{':
        stack.push('}')
        break
      case '[':
        stack.push(']')
        break
      case '(':
        stack.push(')')
        break
      default:
        if (stack.pop() !== val) return false
        break
    }
  }
  return stack.isEmpty()
}

console.log('isValid', isValid('()'))
console.log('isValid', isValid('()[]{}'))
console.log('isValid', isValid('(]'))
console.log('isValid', isValid('(){}}{'))
