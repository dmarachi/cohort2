import LinkedList from "./LinkedList.js";
import Node from "./Node.js";


test('Test the LinkedList class', () => {

	const linkedList = new LinkedList();
	linkedList.insertNode("A" , 1);
	linkedList.insertNode("B" , 2);
	linkedList.insertNode("C" , 3);
	linkedList.insertNode("D" , 4);

	// console.log(linkedList);

	expect(linkedList.headNode.subject).toBe("A");
	expect(linkedList.position.subject).toBe("D");
	
	//To test the next node in the list
	expect(linkedList.headNode.next.subject).toBe("B");
	expect(linkedList.position.subject).toBe("D");

	// //test getFirstNode method
	linkedList.getFirstNode()
	expect(linkedList.position.subject).toBe("A");
	// console.log("First node is: ", linkedList.getFirstNode());

	//test getNextNode method
	linkedList.getNextNode();
	expect(linkedList.position.subject).toBe("B");

	//test getPrevious method //the one Previous to C# is JS
	linkedList.getPreviousNode();
	expect(linkedList.position.subject).toBe("A");

	//test getLastNode method
	linkedList.getLastNode();
	expect(linkedList.position.subject).toBe("D");

	//test deleteNode method which is deleting the last item from the list and the current node becomes Java
	linkedList.deleteNode();
	// console.log(linkedList);
	expect(linkedList.position.subject).toBe("C");
	// console.log("After deleting the node", linkedList);

	linkedList.getNextNode();
	expect(linkedList.position.subject).toBe("C");

	//it is deleting the last item from the list and the current node becomes C# after deleting Java
	linkedList.deleteNode();
	// console.log(linkedList);
	expect(linkedList.position.subject).toBe("B");

	linkedList.insertNode("Dima" , 5);
	// console.log(linkedList);
	
});
