import './Subtracao.css'

const Subtracao = (props) => {
    let numero1 = Number(props.num1);
    let numero2 = Number(props.num2);
    let subtrair = numero1 - numero2
    return (
        <div className='Subtracao_root'>{numero1} - {numero2} = {subtrair}</div>
    )
}

export default Subtracao;