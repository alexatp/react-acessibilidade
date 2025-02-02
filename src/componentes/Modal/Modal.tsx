import "./Modal.css";
import ModalCabecalho from "./ModalCabecalho";
import ModalConteudo from "./ModalConteudo";

interface ModalProps extends React.HTMLProps<HTMLDialogElement> {
    estaAberta: boolean;
    ariaLabel: string;
    fecharModal: () => void;
}

const Modal = ({fecharModal, estaAberta, ariaLabel, ...rest }: ModalProps) => {
    return (
        <>
            <div className="modal__overlay" onClick={fecharModal} />
            <dialog
                className="modal_container"
                aria-label={ariaLabel}
                open={estaAberta}
                onClose={fecharModal}
                {...rest}
            >
                <ModalCabecalho aoFechar={fecharModal} />
                <ModalConteudo aoFechar={fecharModal}/>
            </dialog>
        </>
    )
}

export default Modal