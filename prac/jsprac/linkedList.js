class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.nodeCount = 1;
  }

  append(value) {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(value);
    this.nodeCount++;
  }
  getNode(index) {
    if (this.nodeCount < index) {
      return "인덱스가 너무 큽니다";
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
  addNode(index, value) {
    if (this.nodeCount < index) {
      return "인덱스 오류";
    }
    let newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.nodeCount++;
      return;
    }
    let node = this.getNode(index - 1);
    let nextNode = node.next;
    node.next = newNode;
    newNode.next = nextNode;
    this.nodeCount++;
    // console.log(node);
  }
}

let a = new LinkedList("a");
a.append("b");
a.append("c");

a.addNode(0, "aa");
console.log(a.getNode(0));
