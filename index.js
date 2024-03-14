class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}
 
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else{
            this.tail.next = newNode
            this.tail = newNode 
        }

        this.lenght++
        return this
    }
}

const list = new SinglyLinkedList()
list.push("A")