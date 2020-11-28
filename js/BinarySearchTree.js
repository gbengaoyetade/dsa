class BinarySearchTree {
   constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {

    if(value >= this.value) {
      if(this.right) {
        this.right.insert(value)
      } else {
        this.right =  new BinarySearchTree(value)
      }
    }

    if(value < this.value) {
      if(this.left) {
        this.left.insert(value)
      } else {
        this.left =  new BinarySearchTree(value)
      }
    }
  }

  preOrder() { 
    this.value && console.log(this.value)

    this.left && this.left.preOrder()

    this.right && this.right.preOrder()
  }
}