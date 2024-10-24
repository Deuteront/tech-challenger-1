import React, { ReactNode } from 'react';
import './style.scss';

interface ModalWrapperProps {
  children: ReactNode;
  isOpen: boolean;
  title: string;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="">{children}</div>
    </div>
  );
};

export default ModalWrapper;
