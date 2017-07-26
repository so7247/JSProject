/**
 * 
 */

function foo(){
//	var num = 10;
	num = 10;
	console.log('a');
	console.log('b');
	console.log('c');
}

function bar(){
	try{
		console.log('num : ' + num);
		console.log('정상실행');
	}catch(e){
		console.log('오류 발생 : ' + e.message);

	}
}

//foo();
//bar();

//var arr = [4, 6 , 8 , 3 , 5 , 1 , 2];
var arr = [4, 6 , 8 , 3 , 5 , 1 , 2];

//-- forEach
arr.forEach(ab = function(num){
	console.log("adf :  " + num);
});

arr.sort();
console.log(arr);

//ab = function(num){
//	console.log("adf :  " + num);
//}
//
//for(i = 0; i < arr.length; i++){
//	ab(arr[i]);
//}


function aaa(){
	var num = 10;
	return;
	consyol.log(num);
}

aaa();

var num1 = '100koreajepan200';// 숫자가 아닌걸을 만나면 뒤를 모두 버려버린다.
var num2 = '200.123';
var num3 = parseInt(num1) + parseInt(num2);

console.log(num3);

var str = '3 * 2 + 6';

console.log(str);
console.log(eval(str));

var su1 = 10;
var opt = '+';
var su2 = 6;

var su3 = eval(su1 + opt + su2);

console.log(su3);

var su4 = 4;
//var su5 = 2;
var su5;


var su6 = su4 / su5; 
if(isNaN(su6)){
	console.log('빸');
}else{
	console.log(su6);
}
//
//if(isFinite(su6)){
//	console.log('빸');
//}else{
//	console.log(su6);
//}










