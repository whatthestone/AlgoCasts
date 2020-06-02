// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let node = this.head;
		let count = 0;
		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let node = this.head;
		if (node === null) {
			return null;
		}
		while (node.next) {
			node = node.next;
		}
		return node;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		this.head = this.head.next;
	}

	removeLast() {
		let node = this.head;
		let prev = null;

		if (!node) {
			return;
		}

		if (!node.next) {
			this.head = null;
			return;
		}

		while (node.next) {
			prev = node;
			node = node.next;
		}

		prev.next = null;
		return;
	}

	insertLast(data) {
		const last = this.getLast();
		if (!last) {
			this.head = new Node(data);
		} else {
			last.next = new Node(data);
		}
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
		}

		return null;
	}

	removeAt(index) {
		// *** without reusing getAt method
		// let counter = 0;
		// let node = this.head;
		// let prev = this.head;
		// if (!this.head) {
		// 	return null;
		// }
		// while (node) {
		// 	if (index === 0) {
		// 		this.head = node.next;
		// 		return node;
		// 	} else if (counter === index) {
		// 		prev.next = node.next;
		// 		return node;
		// 	}
		// 	counter++;
		// 	prev = node;
		// 	node = node.next;
		// }

		//reusing getAt method
		let counter = 0;
		if (!this.head) {
			return null;
		}

		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		let prev = this.getAt(index - 1);
		if (prev && prev.next) {
			prev.next = prev.next.next;
		}
		return;
	}
}

module.exports = { Node, LinkedList };

const list = new LinkedList();
