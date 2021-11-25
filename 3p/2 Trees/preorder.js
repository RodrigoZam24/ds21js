//Implementaciones de arboles de busqueda binaria preorder con traverses RodriguezZamora
function preorder(n){
  if (n!==null){
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
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

preoder(p)