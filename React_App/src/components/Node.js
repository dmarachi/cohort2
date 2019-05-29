
class Node {
    constructor(subject, amount) {//, next, previous
        this.subject = subject;
        this.amount = amount;
        this.next = null;
        this.previous = null;
        console.log("The Node subject is: ", subject, "amount is: ", amount);
    }

    show = () => {
        // return `Node subject: ${this.subject}, Node amount: ${this.amount}`;
        if(this.subject === null && this.amount === null) {
        	return "Empty";
        } else {
        	return `Node subject: ${this.subject}, Node amount: ${this.amount}`;
        }
    }
}

export default Node;