class Tree  {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  addLeft(newValue) {
    const newNode = new BinaryTree(newValue)
    if(this.left) {
      newNode.left = this.left
      this.left = newNode;
    } else {
      this.left = newNode;
    }
  }

  addRight(newValue) {
    const newNode = new BinaryTree(newValue)
    if(this.right) {
      newNode.right = this.right
      this.right = newNode;
    } else {
      this.right = newNode;
    }
  }

  preOrder() {
    
    this.value && console.log(this.value)

    this.left && this.left.preOrder()

    this.right && this.right.preOrder()
  }

  inOrder() {
    
    this.left && this.left.inOrder(this.left.value)

    this.value && console.log(this.value)
    
    this.right && this.right.inOrder()
  }

  bfs() {
    const queue = [this];

    while(queue.length) {
      const currentNode = queue[0];
      console.log(currentNode.value)
      queue.shift()

      if(currentNode.left) {
        queue.push(currentNode.left)
      }

      if(currentNode.right) {
        queue.push(currentNode.right)
      }
    }

  }
}