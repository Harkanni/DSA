//@ts-nocheck

function Node(data) {
   this.data = data;
   this.left = null;
   this.right = null;
 }
 
 function BST() {
   this.root = null;
   
   this.insert = function(data) {
     this.root = this._insertNode(this.root, data)
   }
   this._insertNode = function(root, data) {
     if(root === null) {
       return new Node(data)
     }
     
     if(data > root.data) {
       root.right = this._insertNode(root.right, data)
     }
     
     if(data < root.data) {
       root.left = this._insertNode(root.left, data)
     }
     
     return root;
   }
   
   this.delete = function(data) {
     this.root = this._deleteNode(this.root, data)
   }
   
   this._deleteNode = function(root, data) {
     if(root === null) {
       return null
     }
     
     if(data > root.data) {
       root.right = this._deleteNode(root.right, data)
     }
     
     if(data < root.data) {
       root.left = this._deleteNode(root.left, data)
     }
     
     else {
       if(root.left === null) {
         root = root.right
       }
       
       else if(root.right === null) {
         root = root.left
       }
       
       else {
         let smallestNode = this._getSmallestNode(root.right)
         
         root.data = smallestNode.data
         
         root.right = this._deleteNode(root.right, smallestNode.data)
       }
     }
     
     return root;
   }
   
   this._getSmallestNode = function(root) {
     if(root == null) {
       return root
     }    
 
     if(root.left !== null) {
       return this._getSmallestNode(root.left)
     }
     
     return root
   }
   
   this.getMin = function() {
     return this._getSmallestNode(this.root)
   }
   
   this.getMax = function() {
     return this._getBigestNode(this.root)
   }
   
   this._getBigestNode = function(root) {
     if(root == null) {
       return root
     }	
     
     if(root.right !== null) {
       return this._getBigestNode(root.right)
     }
     
     return root
   }
   
   this.getHeight = function() {
     return this._getHeightOfNode(this.root)
   }
   
   this._getHeightOfNode = function(root) {
     if(root == null) {
       return 0
     }
     
     let left = this._getHeightOfNode(root.left)
     let right = this._getHeightOfNode(root.right)
     
     return Math.max(left, right) + 1
   }
   
   
   this.find = function(data) {
      return this._findNode(this.root, data);
    }
   
   this._findNode = function(root, data) {
     if(root == null) {
       return null
     }
     
     if(data > root.data) {
       return this._findNode(root.right, data)
     }
     
     if(data < root.data) {
       return this._findNode(root.left, data)
     }
     
     if(data == root.data) {
       return root
     }
   }
   
   
   this.isBalanced = function() {
     return this._checkBalance(this.root)
   }
   
   this._checkBalance = function(root) {
     if(root == null){
       return true
     }
     
     let left = this._getHeightOfNode(root.left)
     let right = this._getHeightOfNode(root.right)
     
     if(Math.abs(left - right) > 1) {
       return false
     } else {
       return true
     }
   }
   
   this.traverseBSTInOrder = function(root=this.root, result=[]) {
     if(root === null) {
       return
     }
     
     this.traverseBSTInOrder(root.left, result)
     result.push(root.data)
     this.traverseBSTInOrder(root.right, result)
     
     return result
   }
 }
 
 function printTree(node, prefix = "", isLeft = true) {
   if (node === null) return;
 
   if (node.right !== null) {
     printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
   }
   
   console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);
   
   if (node.left !== null) {
     printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
   }
 }
 
 var bst = new BST()
 bst.insert(50)
 bst.insert(30)
 bst.insert(70)
 bst.insert(40)
 bst.insert(20)
 bst.insert(10)
 bst.insert(80)
 bst.insert(60)
 bst.insert(90)
 
 console.log(bst.traverseBSTInOrder())
 console.log("Smalles Node: ", bst.getMin())
 console.log("Biggest Node: ", bst.getMax())
 console.log("Height of tree: ", bst.getHeight())
 bst.traverseBSTInOrder()
 printTree(bst.root)
 bst.find(30)
 bst.isBalanced()
 
 
 
 
 
 
 
 
 
 
 
 