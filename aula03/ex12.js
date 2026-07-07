function calcular(a, b, operacao) {
    return operacao(a, b)
}

var somar = (a, b) => {
    return a + b
}

var subtrair = (a, b) => {
    return a - b
}

var multiplicar = (a, b) => {
    return a * b
}

console.log(calcular(2, 4, somar))
console.log(calcular(2, 4, subtrair))
console.log(calcular(2, 4, multiplicar))