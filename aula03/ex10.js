function contarLetra(texto, letra) {
    let qtde = 0
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == letra) {
            qtde++
        }
    }
    return qtde
}

let texto = "banana"
let letra = "a"
console.log(`Texto: ${texto} / Letra: ${letra} / Qtde: ${contarLetra(texto, letra)}`)