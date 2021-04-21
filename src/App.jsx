import './App.css'

import ContadorFuncao from './components/contador/ContadorFuncao'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
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

            <Card titulo="#13 - Contador (Função)" color="#2F9599">
                <ContadorFuncao numeroInicial={10} passoInicial={1}></ContadorFuncao>
            </Card>

            <Card titulo="#12 - Contador (Classe)" color="#474747">
                <Contador numeroInicial={10} passoInicial={1}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#5E412F">
                <Input></Input>
            </Card>
            
            <Card titulo="#10 - Comunicação Indireta" color="#78C0A8">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#E8175D">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Rendezicação Condicional" color="#CC527A">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{nome: "Eduardo"}}></UsuarioInfo>
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#2F9599">
                <TabelaProdutos></TabelaProdutos>
            </Card>

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