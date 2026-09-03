function Node(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

function remove(node) {
    let prev = node.prev;
    let next = node.next;

    prev.next = next;
    next.prev = prev;
}

function insertAtMRU(node, tail) {
    let prev = tail.prev;

    prev.next = node;
    node.prev = prev;

    node.next = tail;
    tail.prev = node;
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

    remove(node);
    insertAtMRU(node,this.tail);

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
        remove(node);
        insertAtMRU(node,this.tail);

        return;
    }

    let node = new Node(key, value);

    this.cache.set(key, node);
    insertAtMRU(node,this.tail);

    if (this.cache.size > this.capacity) {
        let lru = this.head.next;

        remove(lru);
        this.cache.delete(lru.key);
    }
};