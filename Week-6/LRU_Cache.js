/**
 * @param {number} capacity - the capacity of the cache.
 */
var LRUCache = function(capacity) {
    // initialize a Map to store key-value pairs for the cache
    this.cache = new Map();
    // set the capacity of the cache
    this.capacity = capacity;
};

/**
 * @param {number} key - the key to search for in the cache.
 * @return {number} - the value associated with the key, or -1 if the key is not found.
 */
LRUCache.prototype.get = function(key) {
    // check if the cache contains the key
    if (this.cache.has(key)) {
        // retrieve the value associated with the key
        const value = this.cache.get(key);
        // remove the key-value pair from its current position in the Map
        this.cache.delete(key);
        // add the key-value pair back to the front of the Map
        this.cache.set(key, value);
        // return the value
        return value;
    }
    return -1;
};

/**
 * @param {number} key - the key to add or update in the cache.
 * @param {number} value - the value to associate with the key.
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // check if the cache already contains the key
    if (this.cache.has(key)) {
        // remove the key-value pair from its current position in the Map
        this.cache.delete(key);
    }

    // add the key-value pair to the front of the Map
    this.cache.set(key, value);

    // check if the cache has exceeded its capacity
    if (this.cache.size > this.capacity) {
        // remove the least recently used key-value pair from the Map
        const leastUsedKey = this.cache.keys().next().value;
        this.cache.delete(leastUsedKey);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
