import "./NumerosImpares.css";

function NumerosImpares(props) {
  const impares = props.numeros.filter((numero) => numero % 2 === 1);

  return (
    <ul className="NumerosImpares_root">
      {impares.map((impar) => {
        return <li>{impar}</li>;
      })}
    </ul>
  );
}

export default NumerosImpares;
