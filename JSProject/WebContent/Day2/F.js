/**
 * 
 */
console.log("F-Start");

//var a = 10;
////var obj = {}
////obj.a = 20;
//
//function foo(){
////	a = 20;
//	this.a = 20
//}
//ffff
//foo();
//console.log('a : ' + a);
//console.log('window.a : ' + window.a);
//console.log('this.a : ' + this.a);

var value = 100;

var obj = {
	value : 1,
	func1 : function(){
		this.value += 1;
		myThis = this;
		console.log('func1 value : ' + this.value);
		
		func2 = function(){
			myThis.value += 1;
			console.log('func1 value : ' + myThis.value);
			
		
			func3 = function(){
				myThis.value += 1;
				console.log('func1 value : ' + myThis.value);
			}
			func3();
		}
		func2();
	}
}

obj.func1();



