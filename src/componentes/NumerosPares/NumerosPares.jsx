import "./NumerosPares.css";

function NumerosPares(props) {
  const pares = props.numeros.filter((numero) => numero % 2 === 0);

  return (
    <ul className="NumerosPares_root">
      {pares.map((par) => {
        return <li>{par}</li>;
      })}
    </ul>
  );
}

export default NumerosPares;
