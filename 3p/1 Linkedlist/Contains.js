/** INSTRUCTIONS
 * Rodrigo Vladimir Rodríguez Zamora

 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of chars, numbers, u objects
 * @returns {bool} - true of false, if value v exist or not
 * may use traverse
 *
 * @example
 * contains(3)
 */
function Node(data) { 
   this.data = data
   this.next = null
}
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);

n1.next=n2;
n2.next=n3;
n3.next=n4;
n4.next=n5;
n5.next=n6;

//Imprimir el nodo siguiente
console.log('n1.next: ',n1.next);

const traverse=(n)=>{
    let c=n //iteracion 
    while(c){ //Si existe mostrar datos
        console.log(c.data)
	c=c.next
    }
}
//Llamar constante definidaw
traverse(n1);