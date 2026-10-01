import './VerificarIdade.css'

const VerificarIdade = (props) => {
    if (props.idade >= 18) {
        return <div className='VerificarIdadeMaior_root'>{props.idade} anos, é maior de idade.</div>
    }
    else {
        return <div className='VerificarIdadeMenor_root'>{props.idade} anos, é menor de idade.</div>
    }
}

export default VerificarIdade;