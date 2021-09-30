
////2complexity Rodrigo Vladimir Rodríguez Zamora 3F
//1. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

var limite = parseInt(prompt("Ingresa el limite(numero): "));

Erastothenes(limite);

function Erastothenes(limite) {
	var primos = [];
    
    //Iniciar con lso números primos
	for (var i = 0; i < limite; i += 1) {
		if (i != 0 && i != 1) {
			primos.push(true);
		}
		else {
			primos.push(false);
		}
	}
	//Si primos contiene numeros primos es true, sino falso
	for (var i = 0; i < limite; i += 1) {
		if (primos[i]) {
			for (var j = i + i; j < limite; j += i) {
				primos[j] = false;
			}
		}
	}
	var sonprimos = [];
	//Juntar todos los primos
	for (var i = 0; i < limite; i += 1) {
		if (primos[i]) {
			sonprimos.push(i);
		}
	}
	return sonprimos;
}
