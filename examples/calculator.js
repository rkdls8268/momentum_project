const a = 6;
const b = 3;

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiple: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    mod: function(a, b) {
        return a % b; 
    },
    power: function(a, b){
        return a ** b;
    }
}

const p = calculator.plus(a, b);
const m = calculator.minus(a, b);
const mp = calculator.multiple(a, b);
const d = calculator.divide(a, b);
const mod = calculator.mod(a, b);
const power = calculator.power(a, b);

console.log(`plus: ${p}, minus: ${m}, multiple: ${mp}, divide: ${d}, mod: ${mod}, power: ${power}`);