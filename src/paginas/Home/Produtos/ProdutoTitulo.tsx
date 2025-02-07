import Tipografia from "../../../componentes/Tipografia";

type ProdutoTituloProps = {
  titulo: string;
};

const ProdutoTitulo = ({ titulo }: ProdutoTituloProps) => {
  return (
    <Tipografia
      elemento="h3"
      variante="corpo"
      cor="azul"
      style={{ fontWeight: "700", fontSize: "1.125rem" }}
    >
      {titulo}
    </Tipografia>
  );
};

export default ProdutoTitulo;
