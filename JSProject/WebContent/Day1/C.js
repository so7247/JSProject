/**
 * 
 */

var arr = ['orange', 'yellow','blue', 'green', 'red'];

console.log(arr);

console.log(arr.length);

console.log(arr[0]);
console.log(arr[5]);
console.log(arr[3]);

arr.length = 10
console.log(arr.length);

arr[20] = 'black';
	
console.log(arr[20]);
	
console.log(arr.length);

var brr = [2, 3];
var num = brr[0] + 'Korea';

console.log(num);

var crr = ['A', 'B', 'C'];

for (c in crr){
console.log(crr[c])
}
for (i = 0; i < crr.length; i++) {
	console.log(i + crr[i])
}

crr.push('D');

for (i = 0; i < crr.length; i++) {
	console.log(i + crr[i])
}
console.log(crr);
console.dir(crr);

var drr = new Array(5);

var frr = [[1,2,3],[4,5,6,7]];

console.log(frr.length);

console.log(frr[0].length);
console.log(frr[1].length);

var sum = 0;
for (i = 0; i < frr.length; i++) {
	for (j = 0; j < frr[i].length; j++) {
		sum += frr[i][j]
	}
}
console.log(sum);

//뉴 어레이를 이용하여 2차원 배열 만들기;
var grr = new Array(3);
grr[0] = new Array(5);
grr[1] = new Array(5);
grr[2] = new Array(5);

console.log(typeof grr);
console.log( typeof(grr) );

var hrr = [1, 't', true, {}];

console.log( typeof(hrr) );
console.log( typeof(hrr[0]) );
console.log( typeof(hrr[1]) );
console.log( typeof(hrr[2]) );
console.log( typeof(hrr[3]) );

function aaa(){}

console.log( typeof aaa );
console.log( typeof aaa() );

var month;

//월의 마지막날을 구해서 출력하라

function lastDay(month){
	switch(month){
	case 4 : case 6 : case 9 : case 11 : 
		lastDay = 30;
		break;
	case 2 : 
		lastDay = 29;
		break;
	}
}

// 점수에 따른 수우미양가 구하기

var sungjuk = 100;

function gread(jumsu){
	jumsu = jumsu / 10;
	jumsu = Math.floor(jumsu);
	switch(jumsu){
	case 10 : case 9 :
		//수
		break;
	case 8 : 
		//우
		break;
	case 7 : 
		//미
		break;
	case 6 : 
		//양
		break;
	default : 
		//가
		break;
	}
}

var num = '100';
switch(num){
case '100' : 
	console.log('4.3');
	break ;
}









