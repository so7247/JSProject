/**
 * 
 */

function sum(x, y){
	var tot = x + y;
	return tot;
}

//{} new Object()
//[] new Array()


var num = sum(3, 4);

console.log('num : ' + num);


var objt = {
		name : 'korea',
		sum : function (x, y){
			var tot = x + y;
			return tot;
		}
		
};
var num = objt.sum(3,4);
objt.name = 'korea';
objt.sum = function (x, y){
	var tot = x + y;
	return tot;
}

var sum1 = function (x, y){
	var tot = x + y;
	return tot;
}
//var sum2 = function (x, y){
//	var tot = x + y;
//	return tot;
//}
//var sum3 = function (x, y){
//	var tot = x + y;
//	return tot;
//}

var sum2 = sum1;
var sum3 = sum2;




