import Node from "./Node.js";

class LinkedList {
	constructor() {
      this.headNode = null;
   	this.tailNode = null;
      this.length = 0;
      this.position = null;
   	}
//to get the first node in the list
      getFirstNode() {
         console.log(this.position.previous)
         while (this.position.previous !== null) {
            this.position = this.position.previous;
         }
         return this.position;
      }
          
//to get the last node in the list
   	getLastNode() {
   	
         while(this.position.next !== null) {
            this.position = this.position.next;
         }
         return this.position;
   	}
//to get the next node in the list
   	getNextNode() {
   		
          if (this.position.next !== null) {
            this.position = this.position.next;
            return this.position;
         } else {
            return this.position;
         }
   	}
//to get the previous node in the list
   	getPreviousNode() {
         if (this.position.previous !== null) {
            this.position = this.position.previous;
            return this.position;
         } else {
            return this.position;
         }
   	}
//to get the insert node in the list
   	insertNode(subject, amount) {

          let newNode = new Node(subject, amount);
          if (!this.headNode) {
            this.headNode = newNode;
            this.tailNode = newNode;
            this.position = newNode;
         } else if (this.position.next !== null) {
            newNode.previous = this.position;
            newNode.next = this.position.next;
            this.position.next = newNode;
            // newNode.next.previous = newNode;
            this.position = newNode;
         } else if(this.position.next !== null){
            this.tailNode = newNode;
            newNode.previous = this.position;
            this.position.next = newNode;
            this.position = newNode;
         } else {
            this.tailNode = newNode;
            newNode.previous = this.position;
            this.position.next = newNode;
            this.position = newNode;
         }
         this.length++;
         return this;
      }

   	
//to get the delete node from the list
   	deleteNode() {
   		// if(this.headNode.next === null) {
   		// 	return this.headNode = null;
   		// } else if(this.headNode === this.currentNode) {
   		// 	this.headNode = this.headNode.next;
   		// 	return this.currentNode = this.headNode;
   		// } else {
   		// 	let previousNode = this.getPreviousNode();
     //        previousNode.next = this.currentNode.next.next;
     //        // previousNode.next = this.currentNode.next;
     //        this.currentNode = previousNode;
     //        return this.currentNode;
   		// }

         // if (this.position.next !== null && this.position.previous !== null){
         //    this.position.previous.next = this.position.next;
         //    this.position.next.previous = this.position.previous;
         //    this.position = this.position.next;
         //    this.length--;
         //    return this;
         // } else if (this.position.next === null && this.position.previous !== null) {
         //    this.position.previous.next = null;
         //    this.tailNode = this.position.previous;
         //    this.position = this.position.previous;
         //    this.length--;
         //    return this;
         // } else if (this.position.previous === null && this.position.next !== null) {
         //    this.position.next.previous = null;
         //    this.headNode = this.position.next;
         //    this.position = this.position.next;
         //    this.length--;
         //    return this;
         // } else if (this.position.next === null && this.position.previous === null){
         //    this.headNode = null;
         //    this.position = null;
         //    this.tail = null;
         //    this.length--;
         //    return this;
         // } else {
         //    return "Empty";
         // }

         if (this.position === null) {
        return;
      } else if (this.position.next === null && this.position.previous !== null) {

            this.position.previous.next = null
            this.tailNode = this.position.previous
            this.position = this.position.previous

//DELETING HEAD NODE
      } else if (this.position.previous === null && this.position.next !== null) {

            this.position.next.previous = null
            this.headNode = this.position.next
            this.position = this.position.next

//DELETING LAST REMAINING NODE
      } else if (this.position.next === null && this.position.previous === null){

            this.headNode = null
            this.position = null
            this.tailNode = null

//DELETING MIDDLE NODE
      } else {

            this.position.previous.next = this.position.next
            this.position.next.previous = this.position.previous
            this.position = this.position.next
       }
       this.length--;
      return this;


      }

      // currentNode() {
      //    return this.position;
      // }
}
export default LinkedList;