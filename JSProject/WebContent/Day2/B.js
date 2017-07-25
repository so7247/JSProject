/**
 * 
 */
console.log("B-Start");

//함수는 값으로 사용된다.
//매개변수로 전달될 수 있다.

var foo = function(a){
	console.log('foo1');
	a();
	console.log('foo2');
//	var sum = 0;
//	sum = a + b;
}

var num = function () {
	console.log('aaaa');
};

foo(num);

//함수가 반환값으로 사용될 수 있다.

var foo1 = function(){
	console.log('t1');
	var f = function(){
		console.log('ffff');
	};
	console.log('t2');
	return f;
}

var foo2 = foo1();
//foo1이 아닌 리턴받은 f 함수를 실행한다
foo2();

//console.log(foo2);


var arr = [4, 5, 6, 7, 2];


arr.sort(function(left, ringt){return ringt - left});
console.log(arr);
console.dir(arr);










