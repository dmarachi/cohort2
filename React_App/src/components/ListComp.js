import React, {Component} from 'react';
import Node from "./Node.js";
import LinkedList from "./LinkedList.js";

class ListComp extends Component {
	constructor(props) {
		super(props); 
		this.LinkedList = new LinkedList();
		this.Node = new Node();
		this.state = {
			display: "",
		 }
	}

	handleChange = (event) => {
		const {name , value} = event.target;
		this.setState({[name]: value});
	}

	createNewNode = () => {
		let subject = document.getElementById("inputSubject").value;
		let amount = document.getElementById("inputAmount").value;
		this.LinkedList.insertNode(subject, amount);
		console.log("The list is: ", this.LinkedList);
		this.setState({display: this.LinkedList.position.show()});
		// this.setState({LinkedList: this.LinkedList});
		// this.setState({Node: this.Node});
	}

	deleteCurrentNode = () => {
		this.LinkedList.deleteNode();
		console.log("Item is deleted");
		// this.setState({LinkedList: this.LinkedList});
		if(this.LinkedList.length === 0) {
			return this.setState({display: "Empty"});
		} else {
			this.setState({display: this.LinkedList.position.show()});
		}
		
	}

	first = () => {
		this.LinkedList.getFirstNode();
		console.log("First item is: ", this.LinkedList.getFirstNode());
		// this.setState({LinkedList: this.LinkedList});
		this.setState({display: this.LinkedList.position.show()});
	}

	next = () => {
		this.LinkedList.getNextNode();
		console.log("Next node is : ", this.LinkedList.getNextNode());
		// this.setState({LinkedList: this.LinkedList});
		this.setState({display: this.LinkedList.position.show()});
	}

	previous = () => {
		this.LinkedList.getPreviousNode();
		console.log("Previous node is : ", this.LinkedList.getPreviousNode());
		// this.setState({LinkedList: this.LinkedList});
		this.setState({display: this.LinkedList.position.show()});
	}

	last = () => {
		this.LinkedList.getLastNode();
		console.log("Last node is : ", this.LinkedList.getLastNode());
		// this.setState({LinkedList: this.LinkedList});
		this.setState({display: this.LinkedList.position.show()});
	}

	render() {
	 	 return (
	 	 	<div> 
	 	 	<h1> Hello, from Link List! </h1>
	 	 	<input 
            	id = 'inputSubject'
                type = 'text' 
                placeholder = 'subject' 
                name = 'inputSubject' 
                onChange = {this.handleChange}
            />&nbsp;&nbsp;
            <input 
            	id = 'inputAmount'
                type = 'number' 
                placeholder = 'amount' 
                name = 'inputAmount' 
                onChange = {this.handleChange}
            />&nbsp;&nbsp;
            <button type = 'button' 
            	id = 'Add'
            	onClick ={this.createNewNode} > Add 
            </button>
            <br /><br />
             <button type = 'button' 
            	id = 'First'
            	onClick ={this.first} > First 
            </button>&nbsp;&nbsp;
            <button type = 'button' 
            	id = 'Next'
            	onClick ={this.next} > Next 
            </button>&nbsp;&nbsp;
            <button type = 'button' 
            	id = 'Delete'
            	onClick ={this.deleteCurrentNode} > Delete 
            </button>&nbsp;&nbsp;
             <button type = 'button' 
            	id = 'Previous'
            	onClick ={this.previous} > Previous 
            </button>&nbsp;&nbsp;
             <button type = 'button' 
            	id = 'Last'
            	onClick ={this.last} > Last 
            </button>&nbsp;&nbsp;

            <h2>{this.state.display}</h2>
	 	 	</div>

	 	 	)

	 }
};

export default ListComp;