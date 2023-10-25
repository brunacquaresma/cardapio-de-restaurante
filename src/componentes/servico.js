import { produtos } from "./data-produtos";

export const filtrarCategorias = (categoria) => { // Filtra as categorias para os botões.
    return produtos.filter((produto) => produto.categoria === categoria);
}

export const produtosEntradas = filtrarCategorias("Entradas") // Define uma variável que recebe o filtro da coleção de produtos (pratos) pela categoria "Entradas", para abrir a página nesta opção.

export const BuscarPrato = (textoDigitado) => { // Filtro para a barra de pesquisa.
    return produtos.filter(
    (produto) =>
    produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||  // Aceita maiúsculas e minúsculas.
    produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())) // Aceita maiúsculas e minúsculas.
};