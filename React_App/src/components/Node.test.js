import Node from "./Node.js";

test('Test the Node class', () => {
	const node = new Node("JS", 150);
	
	expect(node.subject).toBe("JS");
	expect(node.amount).toBe(150);
    expect(node.show()).toBe("Node subject: JS, Node amount: 150");
});