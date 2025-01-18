import "./Checkbox.css";
interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  legenda: string;
  id: string;
  nome: string;
  selecionado: boolean;
  aoSelecionar: () => void;
}


const Checkbox = ({
  legenda,
  id,
  nome,
  selecionado,
  aoSelecionar,
  ...rest
}: CheckboxProps) => {
  return (
    <label className="checkbox_legenda" htmlFor={id}>
      <input 
      type="checkbox" 
      className="checkbox" 
      id={id}
      name={nome}
      checked={selecionado}
      onChange={aoSelecionar}
      {...rest}
      />
      <span>{legenda}</span>
    </label>
  )
}

export default Checkbox