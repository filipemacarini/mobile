// ex001
const nome = "Filipe"
let idade = 17
let cidade = "Cascavel"

console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}.`)


// ex002
const somar = (n1, n2) => n1 + n2
const subtrair = (n1, n2) => n1 - n2
const multiplicar = (n1, n2) => n1 * n2
const dividar = (n1, n2) => n1 / n2

let a = 3
let b = 8

console.log(` ${a} + ${b} é ${somar(a, b)}`)
console.log(` ${a} + ${b} é ${subtrair(a, b)}`)
console.log(` ${a} + ${b} é ${multiplicar(a, b)}`)
console.log(` ${a} + ${b} é ${dividir(a, b)}`)


// ex003
function classificar(num) {
    if (nota >= 8) {
        console.log("Aprovado")
    } else if (nota >= 6) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}
classificar(4)
classificar(6)
classificar(8)


// ex004
function tabuada(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(n * i)
    }
}
tabuada(2)


// ex005
let valor
if (valor) {
    console.log(valor)
}
valor = 10
if (valor) {
    console.log(valor)
}