import Banner from "../assets/banner.png"
import {ListaCards} from './cards'
import {produtosEntradas, BuscarPrato, filtrarCategorias} from './servico'
import Categorias from "./categorias";
import CampoDeBusca from "./campodebusca";
import React, {useState} from 'react';
import './estilizacoes/home.css'

function Home() {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas); // A variável com o resultado da função pode ser usada para inicializar o state que representa o cardápio da página (dadosFiltrados),
  const [botaoClicado, setBotaoClicado] = useState("Entradas"); // Inicializa com "Entradas" clicado.
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState(""); // Barra de pesquisa inicia vazia.

const handleFiltro = (categoria) => {
    setTextoBuscaDigitado(""); // Continua vazio.
    setDadosFiltrados(filtrarCategorias(categoria)); // Atualiza filtrando a categoria;
    setBotaoClicado(categoria); // Atualiza a categoria conforme o botão clicado.
}
    const handleBusca = (textoDigitado) => { // Filtro para a barra de pesquisa.
        setTextoBuscaDigitado(textoDigitado);
        textoDigitado.length >= 3 && setDadosFiltrados(BuscarPrato(textoDigitado)); // Busca/atualiza os pratos a partir da 3º letra digitada.
        setBotaoClicado(""); // Botão esvazia quando digita no campo de busca.
    };

return (
    <div className="limitar-secao">
        <header className="banner">
            <img src={Banner} alt="banner" />
            <div>
                <h1>RESTAURANT</h1>
                <p>
                    De pratos clássicos a criações surpreendentes, nosso cardápio é um
                    requinte de sabores refinados.
                </p>
            </div>
        </header>
        <main className="container-principal">
            
        <section className="secao-categorias"> 
            <Categorias 
            handleFiltro={handleFiltro} 
            botaoClicado={botaoClicado} /* Envia as funções para a camada. */ />
        </section>

        <section className="secao-campoBusca">
            <CampoDeBusca
            textoBuscaDigitado={textoBuscaDigitado} 
            handleBusca={handleBusca} /* Envia as funções para a camada. */ />
        </section>

        <section className="secao-cards">
        <div>
            <h2>Cardápio</h2>
        </div>
            <div className='container-cards'>
            {dadosFiltrados.map((produto) => ( // O state que representa o cardápio (dadosFiltrados) é sempre percorrido pelo Array.map. Como ele foi iniciado com os pratos de entrada, esta será a exibição inicial da página.
            <ListaCards
                key={produto.id} 
                nome={produto.nome}
                categoria={produto.categoria}
                preco={produto.preco}
                descricao={produto.descricao}
                imagem={produto.imagem}
              /* Exibir as informações dos pratos */ />
            ))}
            </div>
        </section>
    </main>
    </div>
    );
};

export default Home;