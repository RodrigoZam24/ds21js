//Practica 1 Rodrigo Vladimir Rodríguez Zamora 3F
class LinkedListItem {//Clase para definir el valor y el siguiente valor de la lista
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {//Clase para guardar el primer item de la lista
	constructor() {
		this.head = null;
	}
	prepend(value) {//Funcion para la pila y su agregado en listas enlazadas
		const newItem = new LinkedListItem(value, this.head);
		this.head = newItem;
	}
}
function Stack(n){//Funcion para definir los metodos para la pila
	this.dataStore = [];
	this.top = 0
	this.push = push
}
function push(element) {//Funcion para la pila y su agregado en arreglos
	this.dataStore[this.top++] = element;
}

tamaño = 10000;//tamaño de los ciclos for para agregar 10,000 elementos

//Impresion de resultados
var list = new Stack();//Creacion de la pila basada en arreglos
console.time("TiempoArreglo");//Funcion para iniciar el cronometro
for(var i=0;i<tamaño;i++){//Ciclo para generar número aleatorios de 0-10,000
	list.push(Math.round(Math.random()*10000));//Función para generar números aleatorios
}
console.timeEnd("TiempoArreglo");//Funcion para finalizar el cronometro
console.log(list);

list = new LinkedList();//Creacion de la pila basada en listas enlazadas
console.time("TiempoLista");//Funcion para iniciar el cronometro
for(var i=0;i<tamaño;i++){//Ciclo para generar número aleatorios de 0-10,000
	list.prepend(Math.round(Math.random()*10000));//Función para generar números aleatorios
}
console.timeEnd("TiempoLista");//Funcion para finalizar el cronometro
console.log(list);