let input = require("readline-sync")

let num = input.question("Número: ")
for (let i = num; i > 0; i--) {
    console.log(i)
}
console.log("Fim!")