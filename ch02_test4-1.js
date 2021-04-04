/*
더하기 함수를 모듈로 분리한 calc.js 모듈 파일을 불러들임
방법1 : 함수 할당
*/

var calc = require('./calc');
console.log('방법1 : 모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));