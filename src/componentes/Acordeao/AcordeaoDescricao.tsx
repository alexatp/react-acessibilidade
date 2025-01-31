import Tipografia from "../Tipografia";

interface AcordeaoDescricaoProps {
  id: string;
  descricao: string;
  estaAberto: boolean;
}

const AcordeaoDescricao = ({
  id,
  descricao,
  estaAberto,
}: AcordeaoDescricaoProps) => {
  return (
    <div id={id} hidden={!estaAberto} className="acordeao__descricao">
      <Tipografia elemento="p" variante="corpo" cor="grafite">
        {descricao}
      </Tipografia>
    </div>
  )
}

export default AcordeaoDescricao