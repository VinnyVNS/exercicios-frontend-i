import "./ListaProdutos.css";

function ListaProdutos(props) {
  return (
    <ul className="ListaProdutos_root">
      {props.produtos.map((produto) => {
        return <li>{produto}</li>;
      })}
    </ul>
  );
}

export default ListaProdutos;
