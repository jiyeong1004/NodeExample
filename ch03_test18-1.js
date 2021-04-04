/*
3장 Test ch03_test18-1.js

프로토타입 객체 만들기 변형
*/

function Person(name, age){
    this.name = name;
    this.age = age;
}

// prototype 3개 이상 선언
Person.prototype.walk = function(speed){
    console.log(speed + 'km 속도로 걸어갑니다.');
}

Person.prototype.eat = function(food){
    console.log(food + '를 맛있게 먹습니다.');
}

Person.prototype.sing = function(music){
    console.log(music + '를 역동적으로 부릅니다.');
}

// 객체 3개 이상 선언
var person01 = new Person('3108김지영', 19);
var person02 = new Person('3107김정아', 17);
var person03 = new Person('3111신잎새', 18);

console.log(person01.name + ' 객체의 walk(10)을 호출합니다.');
person01.walk(10);

console.log(person02.name + ' 객체의 eat("pizza")을 호출합니다.');
person02.eat("pizza");

console.log(person03.name + ' 객체의 sing("dynamite")을 호출합니다.');
person03.sing("dynamite");