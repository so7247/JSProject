/**
 * 
 */
console.log("E-Start");

//console.log('aaa');
//alert('확인');
//console.log('bbb');
//
//window.onload = function(){
//	alert('확인');
//}
//console.log('bbb');
//
//alert('ccc');
//

//(function aaa(name){
//	console.log('name : ' + name);
//})('korea');
//aaa('korea');


//function parent(){
//	var a = 100; // <-- 글로발 변수 (전체에서 사용할수있게됨)
//	var b = 200;
//	
//	console.log('a : ' + a);
//	console.log('b : ' + b);
//	
//	function child(){
//		var c = 300;
//
//		console.log('a : ' + a);
//		console.log('c : ' + c);
//	}
//	child();
//}
//
//function child(){
//	var c = 300;
//
////	console.log('a : ' + a);
//	console.log('c : ' + c);
//}

//parent();
//child();

//function p1(){
//	var name = 'korea';
//	var c1 = function(){
//		console.log(name);
//	}
//	return c1;
//}
//
//p1();
//
//function foo(a, b){
//	console.log(arguments.length);
//	for (i = 0; i < arguments.length; i++){
//		console.log(arguments[i]);
//	}
////	console.log(a , b);
//}
//function sum(a, b){
//	var tot;
//	console.log(arguments.length);
//	for (i = 0; i < arguments.length; i++){
//		tot += arguments[i];
//	}
//	return tot
////	console.log(a , b);
//}
//sum();
//sum(1);
//sum(1,2);
//sum(1,2,3);
//var tot = sum(1,2,3,4,5,6,7);
// console.log('합격' + tot);


var obj1 = {
		name : '안성호',
		getName : function(){
			return this.name;
		}
		
}
var obj2 = {
		name : 'java',
		address : 'korea'
		
}
obj2.getName = obj1.getName;

console.log(obj1.getName);
console.log(obj1.getName());



