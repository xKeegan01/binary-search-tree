//jshint esversion:6

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

//insert new node into tree    
    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
              if (val === current.val) return undefined;  
              if (val < current.val) {
                  if (!current.left) {
                      current.left = newNode;
                      return this;
                  } else {
                      current = current.left;
                  }
               } else if (val > current.val) {
                   if (!current.right) {
                       current.right = newNode;
                       return this;
                   } else {
                       current = current.right;
                   }
               }
            }
        }
    }

//search for node in tree    
    search(val) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while(current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

let tree = new BinarySearchTree();