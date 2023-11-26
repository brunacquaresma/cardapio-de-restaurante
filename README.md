# Cardápio de restaurante fictício

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Objetivo

O objetivo deste projeto foi criar uma aplicação web inicialmente utilizando React e CSS, e posteriormente adicionando Next.js. A aplicação exibe um cardápio de um restaurante, permitindo aos usuários filtrar por categorias, realizar buscas por pratos e visualizar informações detalhadas de cada item do cardápio.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

- `src`: Contém o código-fonte da aplicação.
  - `assets`: Armazena recursos da aplicação, como imagens.
  - `componentes`: Contém componentes reutilizáveis, como `Home`, `Categorias`, `CampoDeBusca` e `ListaCards`.
  - `data-produtos.js`: Arquivo contendo dados fictícios sobre os produtos do cardápio.
  - `servico.js`: Arquivo com funções de serviço, como filtrar categorias e buscar pratos.
  - `App.js`: Componente principal que compõe a aplicação.
  - `index.js`: Arquivo principal para renderizar a aplicação.

## Tecnologias Utilizadas

- [React](https://reactjs.org/): Biblioteca JavaScript para construção de interfaces de usuário.
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS): Linguagem de estilização.
- [Next.js](https://nextjs.org/): Framework React para desenvolvimento web.

## Como Usar

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Execute a aplicação com `npm start`.
4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- **Filtrar por Categorias**: Os usuários podem filtrar os pratos do cardápio por categorias clicando nos botões de categorias.

- **Busca por Pratos**: Uma barra de pesquisa permite aos usuários buscar pratos pelo nome.

- **Exibição de Cardápio**: O cardápio é exibido na seção principal, mostrando informações sobre cada prato.

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
