 
////3vector Rodrigo Vladimir Rodríguez Zamora 3F
/** removeAt(p)
*
* removes value at position p
* @arg {number} p - position
*
* @example
* removeAt(3)*/

var arreglo = [1,2,3,4,5]

console.log("Elementos del arreglo: "+arreglo);

var p = parseInt(prompt("Ingresa la posición que deseas eliminar: "));
//Nota yo use node.js para los ejercios pero como usted los comprobora en navegador añado el prompt
arreglo.splice(p,1)

console.log("Elementos resultantes: "+arreglo);

