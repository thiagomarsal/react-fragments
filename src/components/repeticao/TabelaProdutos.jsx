import React  from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {
    const listProdutos = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>$ {produto.preco}</td>
            </tr>
        )
    })
    return(
        <div className="TabelaProdutos">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                {listProdutos}
            </table>
        </div>
    )
}