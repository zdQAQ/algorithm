export default class LinkedListNode {
  constructor(value, next) {
    this._value = value
    this.setNext(next)
  }

  setValue(value) {
    this._value = value
    return this
  }

  getValue() {
    return this._value
  }

  setNext(next) {
    if (next && !(next instanceof LinkedListNode)) {
      throw new Error('setNext expects a LinkedListNode or null')
    }
    this._next = next || null;
    return this
  }

  getNext() {
    return this._next
  }

  hasNext() {
    return this._next instanceof LinkedListNode
  }
}