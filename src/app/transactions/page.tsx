'use client';

import React, { useState } from 'react';
import ModalWrapper from '@/components/atoms/modal-wrapper/modal-wrapper';
import ModalTransaction from '@/components/body/modal-transaction/modal-transaction';

const TransactionPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="transaction-page">
      <h1>Transações</h1>
      <button className="new-transaction-button" onClick={openModal}>
        Nova Transação
      </button>

      <ModalWrapper isOpen={isModalOpen} title="">
        <ModalTransaction closeModal={closeModal} />
      </ModalWrapper>
    </div>
  );
};

export default TransactionPage;
