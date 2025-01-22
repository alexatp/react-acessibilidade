import "./BotaoRadio.css";

export interface BotaoRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  nome: string;
  valor: string;
  selecionado: boolean;
  textoLegenda: string;
  aoMudar: (evento: React.ChangeEvent<HTMLInputElement>) => void;
}

const BotaoRadio = ({
    id,
    nome,
    valor,
    selecionado,
    aoMudar,
    textoLegenda,
}: BotaoRadioProps) => {
    return (
        <li>
            <label htmlFor={id} className="botao__radio--legenda">
                <input
                    type="radio"
                    id={id}
                    name={nome}
                    value={valor}
                    checked={selecionado}
                    onChange={aoMudar}
                />
                <span>{textoLegenda}</span>
            </label>
        </li>
    )
}

export default BotaoRadio