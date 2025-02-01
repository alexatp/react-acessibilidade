import "./Acordeao.css";

interface AcordeaoProps {
    children: React.ReactNode;
  }

const Acordeao = ({ children }: AcordeaoProps) => {
  return (
    <div className="acordeao__container">{ children }</div>
  )
}

export default Acordeao