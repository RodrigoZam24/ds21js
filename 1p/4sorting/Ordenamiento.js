
//Practica 1 Rodrigo Vladimir Rodríguez Zamora 3F
var numerosaleatorios = [];
var numerosaleatorios2 = [];
var pasosbubble=0;
var pasosselection=0;
var tamaño;

tamaño = 10000;
numerosaleatorios = [tamaño];

for(var i=0;i<tamaño;i++){//Ciclo para generar número aleatorios de 0-10,000

    numerosaleatorios[i] = Math.round(Math.random()*10000);//Función para generar números aleatorios
    numerosaleatorios2[i] = numerosaleatorios[i];//Aqui lleno un segundo arreglo con los mismo número generados
                                                 //Para comparar los metodos en una sola ejecucion. 
}

function SWAP(i,m){//Funcion auxiliar para el intercambio
	t = numerosaleatorios[i];
	numerosaleatorios[i] = numerosaleatorios[m];
	numerosaleatorios[m] = t;
}

console.time("TiempoBubble");//Funcion para iniciar el cronometro
function BUBBLE (numerosaleatorios){//Funcion de ordenamiento por metodo Bubble
	for (let i = 0; i < numerosaleatorios.length; i++) {
		for (let k = 0; k < numerosaleatorios.length - 1; k++) {
			if (numerosaleatorios[k]>numerosaleatorios[k+1]) {
				SWAP(k,k+1);
				pasosbubble++;//Contador para contar los pasos
			}
		}
	}
}
console.timeEnd("TiempoBubble");//Funcion para finalizar el cronometro

console.time("TiempoSelection");//Funcion para iniciar el cronometro
function SELECTION(numerosaleatorios2){
	let menor, pos, tmp;
	for (let i = 0; i < numerosaleatorios2.length - 1; i++) {      // Tomamos como menor el primero
	    menor = numerosaleatorios2[i];                             // de los elementos que quedan por ordenar                    
	    pos = i;                                                   // y guardamos su posición
	    for (let j = i + 1; j < numerosaleatorios2.length; j++){   // buscamos en el resto
		    if (numerosaleatorios2[j] < menor) {                   // del array algún elemento
		        menor = numerosaleatorios2[j];                     // menor que el actual
		        pos = j;
		        pasosselection++;//Contador para contar los pasos
		    }
	    }
	    if (pos != i){                                             //Si hay alguno menor se intercambia                         
	        tmp = numerosaleatorios2[i];
	        numerosaleatorios2[i] = numerosaleatorios2[pos];
	        numerosaleatorios2[pos] = tmp;
	    }

	}
}
console.timeEnd("TiempoSelection");//Funcion para finalizar el cronometro

//Impresion de resultados
//console.log("Números generados: "+numerosaleatorios);
BUBBLE(numerosaleatorios);
console.log("Pasos Bubble: "+pasosbubble);
SELECTION(numerosaleatorios2);
console.log("Pasos Selection: "+pasosselection);
console.log("Números generados Ordenados por Bubble: "+numerosaleatorios);
console.log("Números generados Ordenados por Selection: "+numerosaleatorios2);


