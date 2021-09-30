
//6ds Rodrigo Vladimir Rodríguez Zamora 3F
// 2. Map
// a. produce 1e5 random names, ie name35927
// b. add each random name into a Map
// c. measure the time it took
// d. calculate the average of 7 runs

let nombres = new Map();
var tam = 100000;
var contador = 0;
var nombre = [];
var tiempo = 0;

const add = (key, value) => nombres[key] = value;

while (contador < 7) { //Ciclo while para las 7 iteraciones
  //Ciclo for para generar numeros aleatorios
  for(var i = 0; i < tam; i++) {
    nombre[i] = parseInt(Math.random()*tam)+1;
  }
  //Iniciar tiempo 
  var inicio = new Date(); 

  //Añadir atributos al objeto
  for(var j = 0; j < tam; j++) {
    add((j+1), 'name'+nombre[j]);
  }
  //Finalizar el tiempo
  var fin = new Date() - inicio; 
  tiempo = tiempo + fin;
  
  console.log("El tiempo de la iteracion "+contador+1+" es: "+fin+" ms");
  contador++;
}
console.log("El promedio de tiempo es: "+(tiempo/7)+" ms");