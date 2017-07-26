/**
 * Person 클래스
 */

function Person (name, age){
	if(name == undefined){
		this.name = '홍길동';
	}else{
		this.name = name;
	}
	if(age == undefined){
		this.age = 20;
	}else{
		this.age = age;
	}
}

Person.prototype.setName = function(name){
	this.name = name;
}
Person.prototype.getName = function(){
	return this.name;
}
Person.prototype.setAge = function(age){
	this.age = age;
}
Person.prototype.getAge = function(){
	return this.age;
}
Person.prototype.toString = function(){
	return 'name : ' + this.name;
}
//Person.prototype.getName = function(){
//	return 'Korea'; // 메소드가 오버라이딩 된다
//}
