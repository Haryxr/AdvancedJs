const multi= function(){}

multi.prototype.multiply= function(value1, value2) {return value1 * value2
}
const polyInstance = new multi()
console.log(polyInstance.multiply(3,8))