function Node(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    this.head = new Node();
    this.tail = new Node();

    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }

    let node = this.cache.get(key);
 
    node.prev.next = node.next;
    node.next.prev = node.prev;
 
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;

    return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        let node = this.cache.get(key);

        node.value = value;
        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;

        return;
    }

    let node = new Node(key, value);
    this.cache.set(key, node);
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;

    if (this.cache.size > this.capacity) {
        let lru = this.head.next;

        this.head.next = lru.next;
        lru.next.prev = this.head;
        this.cache.delete(lru.key);
    }
};