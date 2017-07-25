/**
 * 자율학습 자바 스크립트 테스트1
 */

//자바스크립트에서 구구단을 구해서 출력하라

var num = 4

for (i = 0; i < 8; i++){
	for (j = 0; j < 9; j++){
		console.log((i + 2) + " * " + ( j + 1 ) + " = " + ((i + 2) * ( j + 1 )));
	}
	console.log('----------------------------------------');
}


//*/
//2. 학생 정보 관리 객체를 만들고, 이를 배열로 5명 생성하여
//  그 목록을 console 모드에 출력하라
//  (학번, 이름, 나이, 국어점수, 영어점수, 수학점수,
//   총점, 평균, 등급 프로퍼티와 합을 구하는 메소드,
//   평균을 구하는 메소드, 등급을 구하는 메소드,
//   전체 정보를 출력하는 메소드 포함)

var Student = [{
	hakbun : 0
	,name : ''
	,age : 0
	,kor : 0
	,eng : 0
	,mat : 0
	,sum : 0
	,avg : 0
	,gread : ''
	,setStudent : function(hakbun, name, age, kor, eng, mat){
		this.hakbun = hakbun;
//		console.log('학번 삽입 ' + this.hakbun);
		this.name = name;
//		console.log('이름 삽입 ' + this.name);
		this.age = age;
//		console.log('나이 삽입 ' + this.age);
		this.kor = kor;
//		console.log('국어점수 삽입 ' + this.kor);
		this.eng = eng;
//		console.log('영어점수 삽입 ' + this.eng);
		this.mat = mat;
//		console.log('수학점수 삽입 ' + this.mat);
	}
	,setSum : function(){
		this.sum = this.kor + this.eng + this.mat;
//		console.log('합계 계산 완료 ' + this.sum);
	}
	,setAvg : function(){
		this.avg = this.sum / 3;
//		console.log('평균 계산 완료 ' + this.avg);
	}
	,setGread : function(){
		switch(Math.floor(this.avg / 10)){
		case 10 : case 9 : 
			this.gread = 'A';
			break;
		case 8 : 
			this.gread = 'B';
			break;
		case 7 : 
			this.gread = 'C';
			break;
		case 6 : 
			this.gread = 'D';
			break;
		default : 
			this.gread = 'F';
			break;
		}
//		console.log('성적 계산완료 ' + this.gread);
	}
	,getGradeCard : function (){
		this.setSum();
		this.setAvg();
		this.setGread();
		var cnt = 0;
		for( i in this){
			if(cnt < 9){
				console.log(i + " : "+ this[i]);
				cnt++;
			}
		}
	}
}
,{
	hakbun : 0
	,name : ''
	,age : 0
	,kor : 0
	,eng : 0
	,mat : 0
	,sum : 0
	,avg : 0
	,gread : ''
	,setStudent : function(hakbun, name, age, kor, eng, mat){
		this.hakbun = hakbun;
//		console.log('학번 삽입 ' + this.hakbun);
		this.name = name;
//		console.log('이름 삽입 ' + this.name);
		this.age = age;
//		console.log('나이 삽입 ' + this.age);
		this.kor = kor;
//		console.log('국어점수 삽입 ' + this.kor);
		this.eng = eng;
//		console.log('영어점수 삽입 ' + this.eng);
		this.mat = mat;
//		console.log('수학점수 삽입 ' + this.mat);
	}
	,setSum : function(){
		this.sum = this.kor + this.eng + this.mat;
//		console.log('합계 계산 완료 ' + this.sum);
	}
	,setAvg : function(){
		this.avg = this.sum / 3;
//		console.log('평균 계산 완료 ' + this.avg);
	}
	,setGread : function(){
		switch(Math.floor(this.avg / 10)){
		case 10 : case 9 : 
			this.gread = 'A';
			break;
		case 8 : 
			this.gread = 'B';
			break;
		case 7 : 
			this.gread = 'C';
			break;
		case 6 : 
			this.gread = 'D';
			break;
		default : 
			this.gread = 'F';
			break;
		}
//		console.log('성적 계산완료 ' + this.gread);
	}
	,getGradeCard : function (){
		this.setSum();
		this.setAvg();
		this.setGread();
		var cnt = 0;
		for( i in this){
			if(cnt < 9){
				console.log(i + " : "+ this[i]);
				cnt++;
			}
		}
	}
}
,{
	hakbun : 0
	,name : ''
	,age : 0
	,kor : 0
	,eng : 0
	,mat : 0
	,sum : 0
	,avg : 0
	,gread : ''
	,setStudent : function(hakbun, name, age, kor, eng, mat){
		this.hakbun = hakbun;
//		console.log('학번 삽입 ' + this.hakbun);
		this.name = name;
//		console.log('이름 삽입 ' + this.name);
		this.age = age;
//		console.log('나이 삽입 ' + this.age);
		this.kor = kor;
//		console.log('국어점수 삽입 ' + this.kor);
		this.eng = eng;
//		console.log('영어점수 삽입 ' + this.eng);
		this.mat = mat;
//		console.log('수학점수 삽입 ' + this.mat);
	}
	,setSum : function(){
		this.sum = this.kor + this.eng + this.mat;
//		console.log('합계 계산 완료 ' + this.sum);
	}
	,setAvg : function(){
		this.avg = this.sum / 3;
//		console.log('평균 계산 완료 ' + this.avg);
	}
	,setGread : function(){
		switch(Math.floor(this.avg / 10)){
		case 10 : case 9 : 
			this.gread = 'A';
			break;
		case 8 : 
			this.gread = 'B';
			break;
		case 7 : 
			this.gread = 'C';
			break;
		case 6 : 
			this.gread = 'D';
			break;
		default : 
			this.gread = 'F';
			break;
		}
//		console.log('성적 계산완료 ' + this.gread);
	}
	,getGradeCard : function (){
		this.setSum();
		this.setAvg();
		this.setGread();
		var cnt = 0;
		for( i in this){
			if(cnt < 9){
				console.log(i + " : "+ this[i]);
				cnt++;
			}
		}
	}
}
,{
	hakbun : 0
	,name : ''
	,age : 0
	,kor : 0
	,eng : 0
	,mat : 0
	,sum : 0
	,avg : 0
	,gread : ''
	,setStudent : function(hakbun, name, age, kor, eng, mat){
		this.hakbun = hakbun;
//		console.log('학번 삽입 ' + this.hakbun);
		this.name = name;
//		console.log('이름 삽입 ' + this.name);
		this.age = age;
//		console.log('나이 삽입 ' + this.age);
		this.kor = kor;
//		console.log('국어점수 삽입 ' + this.kor);
		this.eng = eng;
//		console.log('영어점수 삽입 ' + this.eng);
		this.mat = mat;
//		console.log('수학점수 삽입 ' + this.mat);
	}
	,setSum : function(){
		this.sum = this.kor + this.eng + this.mat;
//		console.log('합계 계산 완료 ' + this.sum);
	}
	,setAvg : function(){
		this.avg = this.sum / 3;
//		console.log('평균 계산 완료 ' + this.avg);
	}
	,setGread : function(){
		switch(Math.floor(this.avg / 10)){
		case 10 : case 9 : 
			this.gread = 'A';
			break;
		case 8 : 
			this.gread = 'B';
			break;
		case 7 : 
			this.gread = 'C';
			break;
		case 6 : 
			this.gread = 'D';
			break;
		default : 
			this.gread = 'F';
			break;
		}
//		console.log('성적 계산완료 ' + this.gread);
	}
	,getGradeCard : function (){
		this.setSum();
		this.setAvg();
		this.setGread();
		var cnt = 0;
		for( i in this){
			if(cnt < 9){
				console.log(i + " : "+ this[i]);
				cnt++;
			}
		}
	}
}
,{
	hakbun : 0
	,name : ''
	,age : 0
	,kor : 0
	,eng : 0
	,mat : 0
	,sum : 0
	,avg : 0
	,gread : ''
	,setStudent : function(hakbun, name, age, kor, eng, mat){
		this.hakbun = hakbun;
//		console.log('학번 삽입 ' + this.hakbun);
		this.name = name;
//		console.log('이름 삽입 ' + this.name);
		this.age = age;
//		console.log('나이 삽입 ' + this.age);
		this.kor = kor;
//		console.log('국어점수 삽입 ' + this.kor);
		this.eng = eng;
//		console.log('영어점수 삽입 ' + this.eng);
		this.mat = mat;
//		console.log('수학점수 삽입 ' + this.mat);
	}
	,setSum : function(){
		this.sum = this.kor + this.eng + this.mat;
//		console.log('합계 계산 완료 ' + this.sum);
	}
	,setAvg : function(){
		this.avg = this.sum / 3;
//		console.log('평균 계산 완료 ' + this.avg);
	}
	,setGread : function(){
		switch(Math.floor(this.avg / 10)){
		case 10 : case 9 : 
			this.gread = 'A';
			break;
		case 8 : 
			this.gread = 'B';
			break;
		case 7 : 
			this.gread = 'C';
			break;
		case 6 : 
			this.gread = 'D';
			break;
		default : 
			this.gread = 'F';
			break;
		}
//		console.log('성적 계산완료 ' + this.gread);
	}
	,getGradeCard : function (){
		this.setSum();
		this.setAvg();
		this.setGread();
		var cnt = 0;
		for( i in this){
			if(cnt < 9){
				console.log(i + " : "+ this[i]);
				cnt++;
			}
		}
	}
}
]

//--------------------------------------------------------------------


console.log('----------------------------------------');
Student[0].setStudent(123456, '안성호', 20, 60, 50, 90);
Student[0].getGradeCard();
console.log('----------------------------------------');
Student[1].setStudent(123456, '이요한', 23, 90, 80, 90);
Student[1].getGradeCard();
console.log('----------------------------------------');
Student[2].setStudent(123456, '이문규', 30, 80, 60, 70);
Student[2].getGradeCard();
console.log('----------------------------------------');
Student[3].setStudent(123456, '홍길동', 30, 40, 90, 50);
Student[3].getGradeCard();
console.log('----------------------------------------');
Student[4].setStudent(123456, '장나라', 20, 60, 50, 90);
Student[4].getGradeCard();
console.log('----------------------------------------');
//*/

//--------------------------------------------------------------------


for(i = 0; i < Student.length; i++){
	for(j in Student[i]){
		console.log(j + " : " + Student[i][j]);
	}
}
//*/
