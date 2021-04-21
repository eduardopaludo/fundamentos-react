import './Contador.css'

import { useState} from 'react'

export default props => {

    const [numero, setNumero] = useState(props.numeroInicial || 0)
    const [passo, setPasso] = useState(props.passoInicial || 5)

    return (
        <div className='Contador'>
            <h2>Contador</h2>
            <h3>{numero}</h3>
            <div>
                <label htmlFor='inputPasso'>Passo: </label>
                <input id='inputPasso' type='number'
                    value={passo} onChange={(e) => setPasso(+e.target.value)}>
                </input>
            </div>
            <button onClick={() => setNumero(numero + passo)}>+</button>
            <button onClick={() => setNumero(numero - passo)}>-</button>
        </div>
    )

}