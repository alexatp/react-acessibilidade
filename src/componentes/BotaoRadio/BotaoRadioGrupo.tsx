import React from 'react'
import "./BotaoRadio.css";
interface BotaoRadioGrupoProps {
    children: React.ReactNode;
    legenda?: string;
    ariaLabel: string;
  }

const BotaoRadioGrupo = ({ children, legenda, ariaLabel }: BotaoRadioGrupoProps) => {
  return (
    <fieldset
    className="radio__grupo--campos"
    aria-label={ariaLabel}
  >
              {legenda && <legend className="radio__grupo--legenda">{legenda}</legend>}
              <ul className="radio__grupo--campos">{children}</ul>
        </fieldset>
  )
}

export default BotaoRadioGrupo