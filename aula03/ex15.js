let produtos = [
    {id: "1", nome: "deuses", preco: 67},
    {id: "2", nome: "da", preco: 100},
    {id: "3", nome: "morte", preco: 67},
    {id: "4", nome: "adoram", preco: 110},
    {id: "5", nome: "maças", preco: 67},
]

console.log(produtos.find(e => { return e.id == "3" }))
console.log(produtos.filter(e => { return e.preco >= 100 }))
console.log(produtos.map(e => { return e.nome }))
produtos.forEach(e => { console.log(`Produto: ${e.nome}\tPreço: ${e.preco}`) })