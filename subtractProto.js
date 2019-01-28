const sub= function(){}

sub.prototype.subtraction= function(value1, value2) {return value1 - value2
}
const polyInstance = new sub()
console.log(polyInstance.subtraction(1,8))