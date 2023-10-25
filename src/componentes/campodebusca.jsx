import Lupa from '../assets/lupa.png'
import './estilizacoes/campodebusca.css'

const CampoDeBusca = ({ textoBuscaDigitado, handleBusca }) => {
    return (
        <div className="barra-de-pesquisa">
            <img src={Lupa} alt="ícone" />
            <input
                type="text"
                value={textoBuscaDigitado}                    
                onChange={(event) => handleBusca(event.target.value)} // Ler a digitação.
                placeholder="Pesquise aqui um dos pratos do nosso cardápio" />
        </div>
    );
};

export default CampoDeBusca;