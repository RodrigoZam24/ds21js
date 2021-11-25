//Implementaciones de arboles de busqueda binaria posorder con traverses RodriguezZamora
function posorder(n){
  if (n!==null){
    posorder(n.l)
    posorder(n.r)
    console.log(n.d)
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
posorder(p)