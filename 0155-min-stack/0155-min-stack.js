var MinStack = function() {
     this.stack = []
     this.min = []
}

MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if(this.min.length == 0 || val <= this.min[this.min.length - 1]){
        this.min.push(val)
    }
};

MinStack.prototype.pop = function() {
     let poped = this.stack.pop()
     if(poped == this.min[this.min.length - 1]){
        this.min.pop()
     }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1]
};
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */