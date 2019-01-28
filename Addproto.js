const add= function(){}

add.prototype.addition = function(value1, value2) {return value1 + value2
}
const polyInstance = new add()
console.log(polyInstance.addition(1,9))

