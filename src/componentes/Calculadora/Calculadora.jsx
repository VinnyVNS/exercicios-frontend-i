import "./Calculadora.css";

function Calculadora(props) {
  let numeroFinal;

  switch (props.operacao) {
    case "+":
      numeroFinal = props.num1 + props.num2;
      break;

    case "-":
      numeroFinal = props.num1 - props.num2;
      break;

    case "*":
      numeroFinal = props.num1 * props.num2;
      break;

    case "/":
      numeroFinal = props.num1 / props.num2;
      break;
  }

  return (
    <div className="Calculadora_root">
      {props.num1} {props.operacao} {props.num2} = {numeroFinal}
    </div>
  );
}

export default Calculadora;
