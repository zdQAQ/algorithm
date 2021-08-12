import LinkedListNode from "./linkedListNode";

export default class LinkedList {
  constructor() {
    this._head = null
    this._count = 0
  }

  insertFirst(value) {
    this._head = new LinkedListNode(value, this._head)
    this._count++;
    return this._head
  }

  insertLast(value) {
    if (this.isEmpty()) {
      return this.insertFirst(value)
    }
    let tail = this._head
    while (tail.hasNext()) {
      tail = tail.getNext()
    }
    tail.setNext(new LinkedListNode(value, null))
    this._count++;
    return tail.getNext()
  }

  insertAt(index, value) {
    if (typeof index !== 'number' || index < 0 || index > this._count) {
      throw new Error('invalid index')
    }
    if (index === 0) {
      return this.insertFirst(value)
    }
    let currentIndex = 0
    let current = this._head
    while (currentIndex < index) {
      current = current.getNext()
      currentIndex++
    }
    current.setNext(new LinkedListNode(value, current.getNext()))
    this._count++;
    return current.getNext()
  }

  removeFirst() {
    if (this.isEmpty()) return null;
    const removed = this._head
    this._count--;
    this._head = this._head.getNext()
    return removed.setNext(null)
  }

  removeLast() {
    if (this.isEmpty()) return null;
    let prev = null
    let tail = this._head
    while (tail.hasNext()) {
      prev = tail
      tail = tail.getNext()
    }
    if (prev === null) {
      return this.removeFirst()
    }
    prev.setNext(null)
    this._count--;
    return tail
  }

  removeAt(index) {
    if (typeof index !== 'number' || index < 0 || index > this._count) {
      throw new Error('invalid index')
    }
    if (index === 0) {
      return this._head
    }
    let currentIndex = 0
    let current = this._head
    while (currentIndex < index) {
      current = current.getNext()
      currentIndex++
    }
    return current
  }

  forEach(cb) {
    let curr = this._head
    while (curr) {
      cb && cb(curr)
      curr = curr.getNext()
    }
  }

  get(index) {
    if (typeof index !== 'number' || index < 0 || index > this._count) {
      throw new Error('invalid index')
    }
    if (index === 0) {
      return this._head
    }
    let currentIndex = 0
    let current = this._head
    while (currentIndex < index) {
      current = current.getNext()
      currentIndex++
    }
    return current
  }

  size() {
    return this._count
  }

  isEmpty() {
    return this._head === null
  }

  head() {
    return this._head
  }

  tail() {
    let curr = this._head
    while (curr && curr.getNext()) {
      curr = curr.getNext()
    }
    return curr
  }

  clear() {
    this._head = null
    this._count = 0
  }
}