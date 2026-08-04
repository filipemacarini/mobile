const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosParesMultiplicados = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        numerosParesMultiplicados.push(numeros[i] * 10)
    }
}

console.log(numerosParesMultiplicados)

numerosParesMultiplicados.filter(n => n % 2 == 0).map(n => n * 10)

console.log(numerosParesMultiplicados)