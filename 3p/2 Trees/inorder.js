//Implementaciones de arboles de busqueda binaria inorder con traverses RodriguezZamora
function inorder(n){
  if (n!==null){
    inorder(n.l)
    console.log(n.d)
    inorder(n.r)
  }
}
function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}

let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node(-1)

p.l = o1
p.r = o2
inorder(p)