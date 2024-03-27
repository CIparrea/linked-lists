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

    unshift(val){
        let newNode = new Node(val)
        
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else{
            let temp = this.head
            this.head = newNode
            this.head.next = temp
        }
        this.lenght++
        return this.lenght
    }

    shift(){
        if(!this.head) return null
        
        let temp = this.head
        
        if (this.size === 1){
            this.tail = null
        }

        this.head = this.head.next
        temp.next = null
        this.size--

        return temp.val
    }
}

const list = new SinglyLinkedList()
list.push("A")
list.unshift("A")
list.shift()