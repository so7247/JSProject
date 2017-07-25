/**
 * 
 */

console.log("Start");

var obj = {
		name : 'korea'
		,setName : function (name){
			this.name = name;
		}
}

var fna = function (){
	//무기명 함수/어너미언스함수
}

fna();


var foo = function(a){
	a();
//	console.log(a + 1);
}

var num = function(){
	console.log('aaaa');
}

foo(function (){
	console.log('aaaa');
});

var foo1 = function (){
//	var fn = function(){
//		console.log('fn');
//	}
	return function(){
		console.log('fn');// <-- 어너미어스 뻥션
	};
}

var foo2 = foo1();

foo2();

var foo3 = function(){
	return 2+3;
}

console.dir(foo3);



