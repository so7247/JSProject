/**
 * 
 */


console.log("헬로");


var num1 = 5;

var num2 = 2;

var num = num1 / num2;

console.log("num : " + num);
console.log("num : " + Math.floor(num));

var str = "Korea";
num = str;
console.log("num : " + num);
console.log("num 0번째 : " + num[0]);

num[4] = "A";
console.log("num : " + num);

num = 3;

if( num ){
	console.log("참");
}else{
	console.log("거짓");
}

var a;

console.log(a);

var b = null;

console.log(b);

var foo = new Object;

//자바 스크립트에서는 중괄호 열고닫고로 이뤄져있는 문자열을 객체라고한다
console.log(foo);

foo.name = "안성호";
foo.age = 20;
console.log(foo);

console.log(foo.age);
console.log(foo.sex);


var bar = {
		name : "이요한",
		age : 23,
		sex : true
};

console.log(bar);

console.log(foo.name);
console.log(foo["name"]);
console.log(foo.nickName);

foo["sex"] = true;

console.log(foo["sex"]);
console.log(foo.sex);





