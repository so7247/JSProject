/**
 * 
 */
console.log("D-Start");

var car1 = {
		model : '아반떼',
		speed : 50 ,
		color : 'red',
		break1 : function(){
			this.speed -= 10;
		},
		accel : function(){
			this.speed += 10;
		}
}

//function Car(model,speed,color){
//	this.model = model;
//	this.speed = speed;
//	this.color = color;
//	this.break1 = function(){
//		this.speed -= 10;
//	};
//	this.accel = function(){
//		this.speed += 10;
//	};
////	model = '아반때';
//}

//			↓

function Car(model,speed,color){
	this.model = model;
	this.speed = speed;
	this.color = color;
}
Car.prototype.break1 = function(){
	this.speed -= 10;
};
Car.prototype.accel = function(){
	this.speed += 10;
};




var car01 = new Car('아반때', 50, 'red');
car01.break1();
console.log(car01.speed);
var car02 = new Car('쏘나타', 70, 'red');
car02.break1();
console.log(car02.speed);
var car03 = new Car('그랜져', 100, 'red');
car03.break1();
console.log(car03.speed);
console.log(car03.toString());

//car01.model = '쏘나타';


//console.log(model);
console.log(car01.model);
console.log(car02.model);
console.log(car03.model);

//var car02 = new Car();
//var car03 = new Car();
//
//var car2 = car1;







