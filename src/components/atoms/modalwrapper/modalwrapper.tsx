import React, { ReactNode } from 'react';

interface ModalWrapperProps {
    children: ReactNode;
    isOpen: boolean;  // Propriedade para indicar se o modal está aberto
    title: string;    // Título do modal
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, isOpen }) => {
    if (!isOpen) return null; // Não renderiza se o modal não estiver aberto

    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};

export default ModalWrapper;
