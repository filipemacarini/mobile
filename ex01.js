const input = require("readline-sync")

let nome = input.question("Nome: ")
let idade = input.question("Idade: ")
let cidade = input.question("Cidade: ")

console.log(`\nNome: ${nome}\nIdade: ${idade}\nCidade: ${cidade}`)