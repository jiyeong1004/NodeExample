var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Calc = function(){
/*  var self = this; */
console.log('Calc에 start event 전달됨.')

    this.on('cal', function(title){
        console.log('계산기 이벤트 발생함 : %s', title);
    });

    this.on('vartrans', function(a, b){
        console.log('계산기 이벤트 발생함 : %s', a, b);
    });
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a, b){
    return a + b;
}

Calc.prototype.substract = function(a, b){
    return a - b;
}

Calc.prototype.multiply = function(a, b){
    return a * b;
}

Calc.prototype.divide = function(a, b){
    return a / b;
}

module.exports = Calc;
module.exports.title = 'calculator';