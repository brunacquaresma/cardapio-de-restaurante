import Entrada from '../assets/entrada.png'
import Massa from '../assets/massa.png'
import Carne from '../assets/carne.png'
import Bebida from '../assets/bebidas.png'
import Salada from '../assets/salada.png'
import Sobremesa from '../assets/sobremesa.png'
import './estilizacoes/categorias.css'

const Categorias = ({ handleFiltro, botaoClicado }) => { // Recebe as funções enviadas.
    return (
    <div>
        <section className="secao-categorias">
            <div className='container-botoes'>
                <button className={botaoClicado === "Entradas" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Entradas")}>
                <img src={Entrada} alt="ícone" />Entradas
                </button>
                <button className={botaoClicado === "Massas" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Massas")}>
                <img src={Massa} alt="ícone" />Massas
                </button>
                <button className={botaoClicado === "Carnes" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Carnes")}>
                <img src={Carne} alt="ícone" />Carnes
                </button>
                <button className={botaoClicado === "Bebidas" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Bebidas")}>
                <img src={Bebida} alt="ícone" />Bebidas
                </button>
                <button className={botaoClicado === "Saladas" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Saladas")}>
                <img src={Salada} alt="ícone" />Saladas
                </button>
                <button className={botaoClicado === "Sobremesas" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Sobremesas")}>
                <img src={Sobremesa} alt="ícone" />Sobremesas
                </button>
            </div>
        </section>
    </div>
    )
}

export default Categorias;