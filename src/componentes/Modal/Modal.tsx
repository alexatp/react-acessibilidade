interface ModalProps extends React.HTMLProps<HTMLDialogElement> {
    estaAberta: boolean;
    ariaLabel: string;
    fecharModal: () => void;
}

const Modal = ({ children, fecharModal, estaAberta, ariaLabel, ...rest }: ModalProps) => {
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
                {children}
            </dialog>
        </>
    )
}

export default Modal