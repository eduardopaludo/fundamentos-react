import './Contador.css'

import { useState} from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

export default props => {

    const [numero, setNumero] = useState(props.numeroInicial || 0)
    const [passo, setPasso] = useState(props.passoInicial || 5)

    return (
        <div className='Contador'>
            <h2>Contador</h2>
            <Display numero={numero}></Display>
            <PassoForm passo={passo} setPasso={setPasso}></PassoForm>
            <Botoes setInc={() => setNumero(numero + 1)} setDec={() => setNumero(numero - 1)}></Botoes>
        </div>
    )

}