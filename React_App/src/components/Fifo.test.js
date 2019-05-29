import Fifo from "./Fifo.js";

test ("First in first out queue: ", () => {

	const queue = new Fifo();

	expect(queue).not.toBe(null);
	// console.log("The queue is: ", queue);

	// testing the add function
	expect(queue.add("Dima")).toBe(true);
	// console.log("The queue after adding to it is: ", queue);
	expect(queue.add("Rama")).toBe(true);
	expect(queue.add("Aya")).toBe(true);
	expect(queue.add("Ayla")).toBe(true);
	// console.log("The queue after adding to it is: ", queue);

	// testing the removingFirst function
	expect(queue.removingFirst()).toBe("Dima");	
	// console.log("The queue after deleting from it is: ", queue);
	expect(queue.removingFirst()).toBe("Rama");
	expect(queue.removingFirst()).toBe("Aya");
	expect(queue.removingFirst()).toBe("Ayla");	
	expect(queue.removingFirst()).toBe("Empty");
	// console.log("The queue after deleting from it is: ", queue);		
});