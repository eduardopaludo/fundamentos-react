import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Joao" idade={21} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Pedro" idade={23} nerd={false}></DiretaFilho>
        </div>
    )
}