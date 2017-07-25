/**
 * 
 */
console.log("C-Start");

function f1 (){
	
}
function f2 (x){
	return x;
}
function f3 (x, y){
	return x + y;
}
function f4 (x, y, z){
	console.log("f4 매개변수 갯수 : " + this.length);
	return x + y + z;
}

f4(1,2,3);
console.log(f1.length);
console.log(f2.length);
console.log(f3.length);
console.log(f4.length);

function foo(){
//	return x + y;
}

var foo1 = new foo();
console.log(foo.name);
console.log(foo.prototype);
console.log(foo.prototype.constructor);


