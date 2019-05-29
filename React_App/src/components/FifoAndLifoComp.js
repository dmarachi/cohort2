import React, {Component} from 'react';
import Fifo from "./Fifo.js";
import Lifo from "./Lifo.js";
import './Account.css';

class FifoAndLifoComp extends Component {
	constructor(props) {
		super(props) 
		this.lifoQueue = new Lifo();
		this.fifoQueue = new Fifo();
	}

	createListItem = () => {
		let item = document.getElementById("inputItem").value;
		this.lifoQueue.add(item);
		this.fifoQueue.add(item);
		this.setState({lifoQueue: this.lifoQueue});
		this.setState({fifoQueue: this.fifoQueue});
		console.log("The LifoQueue is: ", this.lifoQueue);
		console.log("The FifoQueue is: ", this.fifoQueue);
	}

	deleteListItem = () => {
		this.lifoQueue.removingLast();
		this.fifoQueue.removingFirst();
		this.setState({lifoQueue: this.lifoQueue});
		this.setState({fifoQueue: this.fifoQueue});
		console.log("The LifoQueue is: ", this.lifoQueue);
		console.log("The FifoQueue is: ", this.fifoQueue);
	}

	render() {
		let listLifo = this.lifoQueue.queue.map((a,b) => {
			return (
				<div key = {b}>
				<h2> {a} </h2>
				</div>
				);
		});

		let listFifo = this.fifoQueue.queue.map((a,b) => {
			return (
				<div key = {b}>
				<h2> {a} </h2>
				</div>
				);
		});
		return (
			<div>
			<div>
			<h1>-- First in First out -- AND -- Last in First Out --</h1>

			<input 
            	id = 'inputItem'
                type = 'text' 
                placeholder = 'Item' 
                name = 'inputItem' 
            />&nbsp;&nbsp;
            <br /><br />
            <button type = 'button' 
            	id = 'Add'
            	onClick ={this.createListItem} > Add 
            </button>&nbsp;&nbsp;
            <button type = 'button' 
            	id = 'Delete'
            	onClick ={this.deleteListItem} > Delete
            </button>&nbsp;&nbsp;

			</div>
			<div class = "">  <br /><br />
				<div class = "left-half">
					<h2>Fifo list</h2>{listFifo}
				</div>
				<div class = "right-half">
					<h2>Lifo list </h2>{listLifo}
				</div>
			</div>

			</div>
			)
	}

}
export default FifoAndLifoComp;