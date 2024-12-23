// Exercício 3 - GITHUB
// Crie um sistema simples para gerenciar o estoque de uma livraria. O sistema deve permitir adicionar livros ao estoque, remover livros, atualizar a quantidade de livros e
// listar todos os livros disponíveis.

// Passos:

// 1 - Defina um array de objetos para armazenar os livros no estoque.

//    * Cada livro deve ser representado por um objeto com propriedades titulo, autor e quantidade.
 
// 2 - Crie funções para gerenciar o estoque:

//   * adicionarLivro(titulo, autor, quantidade) - Adiciona um novo livro ao estoque.

//   * removerLivro(titulo) - Remove um livro do estoque pelo título.

//   * atualizarQuantidade(titulo, novaQuantidade) - Atualiza a quantidade de um livro no estoque.

//   * listarLivros() - Lista todos os livros no estoque.


// 3 - Use condicionais para verificar se um livro já existe antes de adicioná-lo ou removê-lo.

// 4 - Use laços de repetição para iterar sobre o array de livros quando necessário.


const estoqueLivros = [];

// Função para adicionar um livro ao estoque
function adicionarLivro(titulo, autor, quantidade) {
  const livroExistente = estoqueLivros.find(livro => livro.titulo === titulo);

  if (livroExistente) {
    console.log(`O livro "${titulo}" já está no estoque.`);
  } else {
    estoqueLivros.push({ titulo, autor, quantidade });
    console.log(`O livro "${titulo}" foi adicionado ao estoque.`);
  }
}

// Função para remover um livro do estoque
function removerLivro(titulo) {
  const index = estoqueLivros.findIndex(livro => livro.titulo === titulo);

  if (index !== -1) {
    estoqueLivros.splice(index, 1);
    console.log(`O livro "${titulo}" foi removido do estoque.`);
  } else {
    console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
  }
}

// Função para atualizar a quantidade de um livro no estoque
function atualizarQuantidade(titulo, novaQuantidade) {
  const livro = estoqueLivros.find(livro => livro.titulo === titulo);

  if (livro) {
    livro.quantidade = novaQuantidade;
    console.log(`A quantidade do livro "${titulo}" foi atualizada para ${novaQuantidade}.`);
  } else {
    console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
  }
}

// Função para listar todos os livros do estoque
function listarLivros() {
  if (estoqueLivros.length === 0) {
    console.log("O estoque está vazio.");
  } else {
    console.log("Livros disponíveis no estoque:");
    estoqueLivros.forEach(livro => {
      console.log(`- Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
    });
  }
}

// Exemplos de uso
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 10);
adicionarLivro("1984", "George Orwell", 5);
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 10); // 

listarLivros();

atualizarQuantidade("1984", 7);
removerLivro("O Senhor dos Anéis");

listarLivros();
