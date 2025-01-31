interface AcordeaoConteudoProps {
    children: React.ReactNode;
  }

const AcordeaoConteudo = ({ children }:AcordeaoConteudoProps) => {
  return (
<details className="acordeao__conteudo">
{children }
</details>
  )
}

export default AcordeaoConteudo