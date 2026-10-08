import './Subtracao.css'

const Subtracao = (props) => {
    let numero1 = Number(props.num1);
    let numero2 = Number(props.num2);
    let somar = numero1 - numero2
    return (
        <div className='Subtracao_root'>{numero1} - {numero2} = {somar}</div>
    )
}

export default Subtracao;