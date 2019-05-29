import Lifo from "./Lifo.js";

test ("Last in First out queue: ", () => {


	const queue = new Lifo();

	expect(queue).not.toBe(null);
	// console.log("The queue is: ", queue);

	// testing the add function // it is the same like Fifo
	expect(queue.add("Dima")).toBe(true);
	// console.log("The queue after adding to it is: ", queue);
	expect(queue.add("Rama")).toBe(true);
	expect(queue.add("Aya")).toBe(true);
	expect(queue.add("Ayla")).toBe(true);
	// console.log("The queue after adding to it is: ", queue);

	// testing the removingLast function
	expect(queue.removingLast()).toBe("Ayla");
	// console.log("The queue after deleting from it is: ", queue);
	expect(queue.removingLast()).toBe("Aya");
	expect(queue.removingLast()).toBe("Rama");
	expect(queue.removingLast()).toBe("Dima");
	expect(queue.removingLast()).toBe("Empty");
	// console.log("The queue after deleting from it is: ", queue);
})