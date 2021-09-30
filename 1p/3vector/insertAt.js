 
//////3vector Rodrigo Vladimir Rodríguez Zamora 3F
/** PROBLEM 1
* insertAt(p,v)
*
* inserts a value v, at position p, in the array
* @arg {number} p - position
* @arg {number} v - value
*
* @example
* insertAt(3,3)
* Verify operation result by outputing the array before and after*/

var arreglo = [1,2,3,4,5]

console.log("Elementos del arreglo: "+arreglo);

var p = parseInt(prompt("Ingresa la posición que deseas eliminar: "));
var v = parseInt(prompt("Ingresa el valor nuevo: "));
//Nota yo use node.js para los ejercios pero como usted los comprobora en navegador añado el prompt
arreglo.splice(p,1,v)

console.log("Elementos resultantes: "+arreglo);