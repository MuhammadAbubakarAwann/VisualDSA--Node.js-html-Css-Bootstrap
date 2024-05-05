import { addNodeSmoothly, removeNodeSmoothly } from "../../utils/linkedList_Utils/linkedListBox.js";
import { tempHighlightNode, tempUnHighlightNode, highlightNode } from "../../utils/linkedList_Utils/nodeHighlighter.js";



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        if (!localStorage.getItem('linkedList')) {
            this.updateLocalStorage();
        }
        this.loadFromLocalStorage();
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        this.updateLocalStorage()
        addNodeSmoothly(data, "li")
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return false;
        }

        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let prev = null;
            let i = 0;

            while (i < index) {
                prev = current;
                current = current.next;
                i++;
            }

            newNode.next = current;
            prev.next = newNode;
        }

        this.size++;
        this.updateLocalStorage();
        addNodeSmoothly(data, null, index)
        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size || !this.head) {
            return null;
        }

        let current = this.head;
        let prev = null;
        let i = 0;

        if (index === 0) {
            this.head = current.next;
        } else {
            while (i < index) {
                prev = current;
                current = current.next;
                i++;
            }

            prev.next = current.next;
        }

        this.size--;
        this.updateLocalStorage();
        removeNodeSmoothly(index)
        return current.data;
    }

    async getAt(index) {
        if (index < 0 || index >= this.size || !this.head) {
            return null;
        }

        let current = this.head;
        let i = 0;

        while (i < index) {
            current = current.next;
            tempHighlightNode(i)
            await new Promise(resolve => setTimeout(resolve, 1000));
            tempUnHighlightNode(i)
            i++;
        }
        console.log("value found: " + current.data)
        highlightNode(i)
        return current.data;

    }

    // Display the linked list
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Get the size of the linked list
    getSize() {
        return this.size;
    }

    // Check if the linked list is empty
    isEmpty() {
        return this.size === 0;

    }

    updateLocalStorage() {
        let linkedListArray = [];
        let current = this.head;
        while (current) {
            linkedListArray.push(current.data);
            current = current.next;
        }
        localStorage.setItem('linkedList', JSON.stringify(linkedListArray));
    }


    loadFromLocalStorage() {
        const linkedListArray = JSON.parse(localStorage.getItem('linkedList'));
        if (linkedListArray) {
            for (let item of linkedListArray) {
                this.append(item);
            }
        }
    }
}



const listHandler = new LinkedList();
export default listHandler;

