export default class Stack {
  constructor(elements) {
    this._elements = Array.isArray(elements) ? elements : []
  }

  size() {
    return this._elements.length
  }

  isEmpty() {
    return this.size() === 0
  }

  peek() {
    if (this.isEmpty()) return null;
    return this._elements[this.size() - 1]
  }

  push(element) {
    this._elements.push(element)
    return this
  }

  pop() {
    if (this.isEmpty()) return null;
    return this._elements.pop()
  }

  clear() {
    this._elements = []
    return this
  }
}