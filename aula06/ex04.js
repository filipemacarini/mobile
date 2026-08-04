function descreverLivro(livro) {
    console.log(`"${livro.titulo}" de ${livro.autor}, tem ${livro.paginas} páginas`)
}

const livros = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", paginas: 256 },
    { titulo: "O Cortico", autor: "Aluisio Azevedo", paginas: 304 },
    { titulo: "Iracema", autor: "Jose de Alencar" }
]

livros.forEach(l => descreverLivro(l))