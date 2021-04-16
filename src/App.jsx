import './App.css'

import Alunos from './components/repeticao/Alunos'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basics/Aleatorio'
import Fragmento from './components/basics/Fragmento'
import ComParametro from './components/basics/ComParametro'
import FirstComponent from './components/basics/First'

export default () => (
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#06 - Repetição" color="#363636">
                <Alunos></Alunos>
            </Card>
            
            <Card titulo="#05 - Familia" color="#355C7D">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="João"/>
                    <FamiliaMembro nome="Maria"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Fragmento" color="#F67280">
                <Fragmento/>
            </Card>

            <Card titulo="#03 - Aleatório" color="#F8B195">
                <Aleatorio
                    min={1}
                    max={60}
                ></Aleatorio>
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#C06C84">
                <ComParametro
                    nome="Pedro"
                ></ComParametro>
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#6C5B7B">
                <FirstComponent></FirstComponent>
            </Card>
        </div>
        
    </div>
)