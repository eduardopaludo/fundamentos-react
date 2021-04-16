import produtos from '../../data/produtos'

export default (props) => {

    const tabelaProdutos = produtos.map((produto) => {
        return (
            <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Preço</td>
                </tr>
                {tabelaProdutos}
            </table>
        </div>
    )
}