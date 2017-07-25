/**
 * 
 */
console.log("D-Start");

var car1 = {
		model : '아반떼',
		speed : 50 ,
		color : 'red',
		break : function(){
			this.speed -= 10;
		},
		accel : function(){
			this.speed += 10;
		}
}

function Car(model,speed,color){
	this.model = model;
	this.speed = speed;
	this.color = color;
//	model = '아반때';
}

var car01 = new Car('아반때', 50, 'red');
var car02 = new Car('쏘나타', 70, 'red');
var car03 = new Car('그랜져', 100, 'red');
//car01.model = '쏘나타';


//console.log(model);
console.log(car01.model);
console.log(car02.model);
console.log(car03.model);

//var car02 = new Car();
//var car03 = new Car();
//
//var car2 = car1;







