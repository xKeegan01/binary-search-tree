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

//remove specific node from tree
    remove(val) {
        const removeNode = (node, val) => {
            if (!node) {
                return null;
            }
            if (val == node.val) {
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    return node.right;
                }
                if (!node.right) {
                    return node.left;
                }
                let temp = node.right;
                while (!temp.left) {
                    temp = temp.left;
                }
                node.val = temp.val;
                node.right = removeNode(node.right, temp.val);
            } else if (val < node.val) {
                node.left = removeNode(node.left, val);
                return node;
            } else {
                node.right = removeNode(node.right, val);
                return node;
            }
        };
        this.root = removeNode(this.root, val);
        return true;
    }

//traverse thru tree horizontaly    
    BreadthFirstSearch() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

//traverse thru tree verticaly    
    DepthFirstPreOrder() {
        let data = [];
        let current = this.root;
        const traverse = (node) => {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };
        traverse(current);
        return data;
    }

//traverse thru tree verticaly starting at bottom
    DepthFirstPostOrder() {
        let data = [];
        let current = this.root;
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        };
        traverse(current);
        return data;
    }

//traverse thru tree verticaly in order
    DepthFirstInOrder() {
        let data = [];
        let current = this.root;
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        };
        traverse(current);
        return data;
    }
}

let tree = new BinarySearchTree();