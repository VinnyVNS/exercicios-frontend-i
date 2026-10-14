import './Multiplicacao.css'

const Multiplicacao = (props) => {
    let numero1 = props.num1;
    let numero2 = props.num2;
    let multiplicar = numero1 * numero2
    return (
        <div className='Multiplicacao_root'>{numero1} * {numero2} = {multiplicar}</div>
    )
}

export default Multiplicacao;