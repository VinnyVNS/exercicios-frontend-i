import "./NomesOrdenados.css";

function NomesOrdenados(props) {
  const nomes = props.nomes.sort();

  return (
    <ol className="NomesOrdenados_root">
      {nomes.map((nome) => {
        return <li>{nome}</li>;
      })}
    </ol>
  );
}

export default NomesOrdenados;
