// Common js

const { subtract } = require("./mathOperationsM")

function add(a, b){
    return a+b
}
function sub(a, b){
    return a-b
}
function multiply(a, b){
    return a*b
}

module.exports = {
    add, 
    subtract,
    multiply,
};
