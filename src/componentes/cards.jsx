import './estilizacoes/cards.css'

export const ListaCards = (produto) => { // Recebe via props do componente "Home".
    return (
    <div className='container-cards'>
        <div className="card">
            <figure>
                <img src={produto.imagem} alt={produto.nome} />
            </figure>
        <div className="container-informacoes">
            <h3>{produto.nome}</h3>
            <small>{produto.categoria}</small>
            <p>{produto.descricao}</p>
        </div>
        <div className='preco'>
            <p><span>{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(produto.preco)}</span>
            </p>
        </div>
        </div>
    </div>
    )
}