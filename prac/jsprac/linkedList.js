// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    this.head = new Node(value, this.head); //head에 새로운 node가 들어가고 기존의 해드는 next로 밀려난다.
  }

  // LinkedList 가장 끝에 있는 노드에 새로운 노드를 연결합니다.
  append(value) {
    let curr = this.head;
    while (curr.next !== null) {
      // curr의 다음이 끝에 갈 때까지 이동합니다.
      curr = curr.next;
    }
    curr.next = new Node(value);
    this.tail = curr.next;
  }

  get_node(index) {
    let node = this.head; // 링크드리스트의 Head를 처음 노드로 지정합니다!
    for (let i = 0; i < index; i++) {
      node = node.next; // 원하는 위치에 당도할 때 까지 다음 노드로 이동!
    }
    return node;
  }

  add_node(index, value) {
    // ["자갈"] -> ["흑연"] -> ["밀가루"] -> ["우편"]
    // 이때까지는, this.head = ["자갈"]
    // ["짱짱"]이라는 친구를 0번째 index로 추가
    // ["짱짱"] -> ["자갈"]
    // this.head = ["짱짱"]
    // ["짱짱"] -> ["자갈"] -> ["흑연"] -> ["밀가루"] -> ["우편"]
    const newNode = new Node(value); // 일단 새로운 값을 기준으로 새 노드를 만들어요!
    if (index === 0) {
      // 0번째에 추가를 하고 싶다면!
      newNode.next = this.head; // 원래 Head였던 노드를 새 노드의 next로 지정해요!
      this.head = newNode; // 그리고, Head를 새 노드로 바꾸어줍니다!
      return;
    }

    // [3] - [4] - [5]에서 [3] - [4] - [6] - [5]로 6을 중간에 넣는다고 할게요!
    // 추가하고 싶은 index의 이전 노드 정보를 갖고옵니다! 여기선 [4] 입니다.
    const node = this.get_node(index - 1);
    // 1. 이전 노드([4])의 포인터([5])를 next_node로 임시 저장해요!
    const nextNode = node.next;
    // [4] -> [6]
    // 2. 이전 노드([4])의 포인터를 [6]으로 지정합니다!
    node.next = newNode;
    // [6] -> [5]
    // 3. 새로 삽입한 노드([6])의 포인터를 next_node인 [5]으로 지정합니다!
    newNode.next = nextNode;
  }

  // 스택
  peek_node() {
    // 리버스 링크드 리스트
    // 링크드리스트는 보통의 스택과 달리 head가 peek된다.
    // peek은 마지막 데이터를 가져오는데, linkedlist는 마지막에 넣은 데이터를
    // 뽑으려면 모든 데이터를 돌아야 하기 때문에 head를 마지막 데이터로 사용한다.

    if (this.head === null) return null;
    return this.head.data;
  }

  push_node(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop() {
    if (this.head === null) {
      return null;
    } else {
      let result = this.head;
      this.head = this.head.next;
      return result;
    }
  }

  // 큐
  peek() {
    if (!this.tail) return null;

    return this.tail;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }
  }

  dequeue() {
    let dequeueNode = this.head;
    if (dequeueNode === null) return null;
    this.head = this.head.next;
    return dequeueNode.data;
  }
}

let a = new LinkedList();
a.insertFirst("a");
a.append("b");
a.append("c");

// a.add_node(0, "0");

// console.log(a.peek_node());
// a.push_node("push");
// console.log(a.get_node(0));
// console.log(a.pop());
// console.log(a.peek());

console.log(a);
// console.log("----------------------------");
// console.log(a.dequeue());
// console.log("----------------------------");
// console.log(a);
// console.log("----------------------------");
// console.log(a.enqueue("tail"));
