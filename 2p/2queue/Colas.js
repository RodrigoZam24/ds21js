/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * Queue implementation (array-based)
 *
 */ //Rodrigo Vladimir Rodríguez Zamora 3F

function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}
function enqueue(element) {
	this.dataStore.push(element);
}
function dequeue() {
	return this.dataStore.shift();
}
function front() {
	return this.dataStore[0];
}
function back() {
	return this.dataStore[this.dataStore.length-1];
}
function toString() {
	var retStr = "";

	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}
function empty() {
	if (this.dataStore.length == 0) {
		return true;
	}
	else {
		return false;
	}
}
// Ahora probamos el rpograma
var q = new Queue();
q.enqueue("OSCAR");
q.enqueue("DIEGO");
q.enqueue("JESUS");

console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Al frente de la cola: " + q.front());
console.log("Atras de la cola: " + q.back());