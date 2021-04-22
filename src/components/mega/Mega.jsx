import { useState } from 'react'

export default props => {

    const [numero, setNumeros] = useState(props.qtde || 6)
    const resultado = []

    function gerarNumeros(qtde){
        for(let i = 0; i < qtde; i++) {
            resultado.push(parseInt(Math.random() * (60 - 1 + 1) + 1))
        }
    }
    return (
        <div>
            <h2>Mega</h2>
            <h3>{resultado}</h3>
            <button onClick={gerarNumeros(props.qtde)}>Gerar</button>
        </div>
    )

}