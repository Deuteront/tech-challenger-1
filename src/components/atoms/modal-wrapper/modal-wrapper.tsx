import React, { ReactNode } from 'react';

interface ModalWrapperProps {
  children: ReactNode;
  isOpen: boolean;
  title: string;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default ModalWrapper;
