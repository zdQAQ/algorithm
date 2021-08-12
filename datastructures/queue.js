export default class Queue {
  constructor(elements) {
    this._elements = Array.isArray(elements) ? elements : []
    this._offset = 0
  }

  enqueue(element) {
    this._elements.push(element)
    return this
  }

  dequeue() {
    if (!this.size()) return;
    const first = this.front()
    this._offset++;
    if (this._offset * 2 > this.size()) {
      this._elements = this._elements.slice(this._offset)
      this._offset = 0
    }
    return first
  }

  front() {
    return this.size() > 0 ? this._elements[this._offset] : null
  }

  last() {
    return this.size() > 0 ? this._elements[this.size() - 1] : null
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this._elements = []
    this._offset = 0
    return this
  }

  size() {
    return this._elements.length
  }
}