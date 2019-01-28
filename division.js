const div= function(){}

div.prototype.division= function(value1, value2) {return value1 / value2
}
const polyInstance = new div()
console.log(polyInstance.division(1,8))