class Stack {

    constructor() {
        this.stack = [];
    }

    push(word) {
        if (typeof word === 'string') {
            this.stack.push(word);
            return (word + " pushed.");
        } else {
            return "Not a string. Not stacked.";
        }

    }

    pop() {

        if (this.stack.length <= 0) {
            return "Nothing in stack";
        } else {
            return (this.stack.pop() + " popped");
        }
    }

    peek() {
        if (this.stack.length <= 0) {
            return "Nothing in stack";
        } else {
            let topItem = this.stack[this.stack.length - 1];
            return (topItem + " on top.");
        }
    }

    check() {
        return this.stack;
    }

}

const aStack = new Stack();

console.log(aStack.push("milk"));
console.log(aStack.push("eggs"));
console.log(aStack.peek());
console.log(aStack.push("chicken"));
console.log(aStack.peek());
console.log(aStack.check());
console.log(aStack.pop());
console.log(aStack.check());
console.log(aStack.pop());
console.log(aStack.check());
console.log(aStack.pop());
console.log(aStack.check());
