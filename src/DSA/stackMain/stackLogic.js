import { addCircleSmoothly, removeCircleSmoothly } from "../../utils/stack_Utils/circle.js";

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        this.loadStack()
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        updateOutput(`Value ${val} pushed to stack.`);
        console.log(`Value ${val} pushed to stack.`);
        this.updateLocalStorage();
        this.updateUI()

    }
    pop() {
        if (!this.first) { 
            updateOutput("Stack is empty"); 
            return null; 
        }
        
        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        
        updateOutput(`Popped value: ${temp.value}`);
        removeCircleSmoothly(temp.value);
    
        this.updateUI()
    
        this.updateLocalStorage();
    
        if (this.first) {
            const newHeadCircle = document.getElementById(this.first.value);
            if (newHeadCircle) {
                newHeadCircle.classList.remove("bg-dark"); 
                newHeadCircle.classList.add("bg-success"); 
            }
        }
    
        return temp.value;
    }

    search(val) {
        let current = this.first;
        let index = 0;
        while (current) {
            if (current.value === val) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    peek() {
        return this.first ? this.first.value : null;
    }

    updateLocalStorage() {
        let stackArray = [];
        let current = this.first;
        while (current) {
            stackArray.push(current.value);
            current = current.next;
        }
        localStorage.setItem('stack', JSON.stringify(stackArray));
    }
    
    loadStack() {
        let stackArray = JSON.parse(localStorage.getItem('stack'));
        if (stackArray) {
            for (let val of stackArray.reverse()) {
                this.push(val);
            }
        }
    }

    updateUI() {
        const circleMainDiv = document.getElementById("circleMain");
        let stackArray = JSON.parse(localStorage.getItem('stack')) || [];
        
        circleMainDiv.innerHTML = "";
    
        stackArray.forEach((val, index) => {
            const isHead = index === 0;  
            const isTail = index === stackArray.length - 1;  
            
            addCircleSmoothly(val, isHead, isTail);
        });
    }
    



}


const outputDiv = document.getElementById('output');
function updateOutput(message) {
    outputDiv.innerHTML = message;
}

const stack = new Stack();

export default stack;
