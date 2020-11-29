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

  search(value) {
    if(value > this.value && this.right) {
      return this.right.search(value)
    }
    if(value < this.value && this.left) {
      return this.left.search(value)
    }

    return this.value === value ? this : null
  }

  preOrder() { 
    this.value && console.log(this.value)

    this.left && this.left.preOrder()

    this.right && this.right.preOrder()
  }

  findMinimum() {
    if(this.left) {
      return this.left.findMinimum()
    }

    return this
  }


  deleteNode(value, parent=this) {
    if(!parent){
      return;
    }

    if(value > this.value) {
      this.right && this.right.deleteNode(value)
      return this;
    }

    if(value < this.value) {
      this.left && this.left.deleteNode(value)
      return this;
    }

    if(!parent.left && !parent.right) {
      parent.clearNode()
    }

    if(value === this.value) {
      if(this.right && !this.left) {
        parent = this.right;
        return this;
      }
      if(this.left && !this.right) {
        parent = this.left;
        return this;
      }
      if(this.left && this.right) {
        const miniMum = this.right.findMinimum()
  
        parent.value = miniMum.value;
        parent.right = this.right.deleteNode(miniMum.value);

        return this;
      }
    }
  }

  clearNode() {
    this.value = null
    this.left = null;
    this.right = null;
  }
}