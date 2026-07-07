for (let i = 1; i <= 100; i++) {
    let numero = `${i} `
    if (i % 3 == 0) {
        numero += "Fizz"
    }
    if (i % 5 == 0) {
        numero += "Buzz"
    }
    console.log(numero)
}