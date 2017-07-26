/**
 * 
 */

function Student(name,age , hakbun){
	Person.call(this,name,age);
	this.hakbun = hakbun;
}

Student.prototype = new Person();// <-- 상속

Student.prototype.setHakbun = function(hakbun){
	this.hakbun = hakbun;
}
Student.prototype.getHakbun = function(){
	return this.hakbun;
}