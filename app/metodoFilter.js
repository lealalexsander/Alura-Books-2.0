const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id).value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == elementoBtn);
    console.table(livrosFiltrados);
}