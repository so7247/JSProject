/**
 * 
 */

var person1 = new Person('안성호');
var person2 = new Person('이요한');
var person3 = new Person('이문규');

console.log(person1.name);
console.log(person2.name);
console.log(person3.name);
console.log(person1.name);
console.log(person1.name);

person1.setName('얀셩효');
console.log(person1.getName());
console.log(person1);
console.log(person1.toString());

var student1 = new Student('t001');
var student2 = new Student('안성호', '1234t');
var student3 = new Student('이요한', 23, '3234t');

console.log(student1.getHakbun());
console.log(student2.getName());
console.log(student2.getHakbun());
console.log(student3.getName());
console.log(student3.getHakbun());
console.log(student3.getAge());