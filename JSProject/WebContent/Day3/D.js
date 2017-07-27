/**
 * 
 */

var str = 
`Korea
Japen
Test`;


console.log(str);

var name = '안성호';
var age = 20;
var address = '서울';

//이름 : 안성호 나이 20 주소 서울

//console.log('이름 : ' + name + 
//		', 나이 : ' + age + 
//		', 주소 : ' + address);

console.log(`이름 : ${name}, 나이 : ${age}, 주소 : ${address}`);


function func(f){
	console.log('f1');
	f();
	console.log('f2');
}


func(()=>{
	console.log('어쩌고 저쩌고');
});


var arr = [];
arr.push(3);
arr.push(5);
arr.push(7);
arr.push(8);
arr.push(2);
arr.push(4);
arr.push(9);
arr.push(2);

arr.forEach((v)=>{
	console.log(v);
});

//multi = function(x, y){
//	return x * y;
//}
//		  ↓
//multi = (x,y) => return x * y;

//		  ↓
multi = (x,y) => x * y;


console.log(multi(4,2));

//				함수 초기화값 선언
function add(a = 0, b = 0){
	return a + b;
}

console.log(add());
console.log( add(3) );
console.log( add(3, 5) );





