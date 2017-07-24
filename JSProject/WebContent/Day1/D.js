/**
 * 
 */

//function sum(x, y){
//	var tot = x + y;
//	return tot;
//}
//
////{} new Object()
////[] new Array()
//
//
//var num = sum(3, 4);
//
//console.log('num : ' + num);
//
//
//var objt = {
//		name : 'korea',
//		sum : function (x, y){
//			var tot = x + y;
//			return tot;
//		}
//		
//};
//var num = objt.sum(3,4);
//
//objt.name = 'korea';
//objt.sum = function (x, y){
//	var tot = x + y;
//	return tot;
//}
//
//
//var sum1 = function (x, y){
//	var tot = x + y;
//	return tot;
//}
//var sum2 = function (x, y){
//	var tot = x + y;
//	return tot;
//}
//var sum3 = function (x, y){
//	var tot = x + y;
//	return tot;
//}
//
//var sum2 = sum1;
//var sum3 = sum2;
//
//
//function aaa(x, y, z){
//	return x + y + z;
//}
//
//var aaa = function (x, y, z){
//	return x + y + z;
//}
//
//var aaa = new Function ('x', 'y', 'z', 'return x + y + z;');
//
//var x = aaa(1, 2, 3);
//
//console.log(x);
//
//function abc(x, y){
//	return x + y;
//}
//abc.iName = 'korea';
//console.log(abc);
//console.log(abc.iName);


var name1 = 'T-Academy';
var obj1 = {
		name1 : 'korea',// <-- this.name1
		doPrint : function(name1){
//			var name1 = 'japen';
			console.log('this.name1 : ' + this.name1);
			console.log('name1 : ' + name1);
		}
}

console.log(obj1.name1);

obj1.doPrint('japen');


//이름 Data 프로퍼티 x, y 메소드 doSum() 값 합 구하기
//x,y 값을 할당 메소드와 얻어오는 메소드를 댁체 리터럴로 만드시오.

var Data = {// JSON은 무조건 값을 넣어줘야한다
		x : 0,
		y : 0,
		setX : function(x){
			this.x = x;
		},
		setY : function(y){
			this.y = y;
		},
		getX : function(){
			return this.x;
		},
		getY : function(){
			return this.y;
		},
		doSum : function(){
//			console.log(this.getX() + this.getY());
			return this.getX() + this.getY();
		}
}

Data.setX(20);
Data.setY(30);
var tot = Data.doSum();
console.log('X : ' + Data.getX());
console.log('Y : ' + Data.getY());
console.log('Sum : ' + tot);

