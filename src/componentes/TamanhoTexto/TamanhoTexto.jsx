import "./TamanhoTexto.css";

function TamanhoTexto(props) {
  let caracteres = props.texto.length;

  return (
    <div className="TamanhoTexto_root">
      O texto possui {caracteres} caracteres.
    </div>
  );
}

export default TamanhoTexto;
