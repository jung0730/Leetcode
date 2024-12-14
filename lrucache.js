/**
 * @param {number} capacity
 */

class LRUCache {
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1
    }
    // remove and reinsert the key to the end of the map, making it the most recently used
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }

  put(key,value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      // over capacity, remove the least recently used key
      // 越常用的key 放在map 最後，所以只要access map 第一個key就是最不常用的
      const lruKey = this.cache.keys().next().value
      this.cache.delete(lruKey)
    }
    this.cache.set(key, value)
  }
}



var obj = new LRUCache(capacity)
var param_1 = obj.get(key)
obj.put(key,value)