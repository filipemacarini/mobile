function range(inicio, fim) {
    let array = []
    while (inicio <= fim) {
        array.push(inicio)
        inicio++
    }
    return array
}

function somar(array) {
    let soma = 0
    array.forEach(n => {
        soma += n
    });
    return soma
}

console.log(somar(range(3, 9)))