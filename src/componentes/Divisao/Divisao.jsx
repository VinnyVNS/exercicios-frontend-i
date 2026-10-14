import './Divisao.css'

const Divisao = (props) => {
    let numero1 = Number(props.num1);
    let numero2 = Number(props.num2);
    let dividir = numero1 / numero2
    return (
        <div className='Divisao_root'>{numero1} / {numero2} = {dividir}</div>
    )
}

export default Divisao;