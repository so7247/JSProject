/**
 * 
 */

var foo = {
		name : '안성호',
		age : 20,
		major : 'computer science'
};

for ( var name in foo ) {
	console.log(name + " : " + foo[name]);
}

console.log(document);

//for ( var name in document ) {
//	console.log(name + " : " + document[name]);
//}

var a = 100;
var b = 100;

var obja = {value : 100}; //제이슨 리터럴
var objb = {value : 100};
var objc = objb;

console.log( a == b );
console.log( obja == objb );
console.log( objb == objc );

// ==, === 연산자

var num1 = 10;
var num2 = '10';

//타입은 보지 않는다.
if (num1 == num2) {
	console.log('참');
}else{
	console.log('거짓');
}
//===타입까지 비교한다
if (num1 === num2) {
	console.log('참');
}else{
	console.log('거짓');
}

//---------------------------------------------
var c = 100;
var objd = {value : 100};

console.log(c);
console.log(objd);

//자바 스크립트는 위에서 아래로 내려가면서 명령을 실행함으로 함수를 실행하기 전에 함수를 부를순 없다
function aaa(b, objt){
	b = 90;
	objt.value = 80;
	console.log('aaa');
}
aaa(a, objd);

console.log(c);
console.log(objd);

