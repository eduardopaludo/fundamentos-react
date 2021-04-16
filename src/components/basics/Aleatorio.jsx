export default props => {

    const min = props.min
    const max = props.max
    const aleatorio = parseInt(Math.random() * (max - min )) + min
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>
                <strong>Número Min:</strong> {min}
            </p>
            <p>
                <strong>Número Max:</strong> {max}
            </p>
            <p>
                <strong>Número Aleatório:</strong> {aleatorio}
            </p>
        </div>
    )
}