'use client';

import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import ModalWrapper from '@/components/atoms/modal-wrapper/modal-wrapper';
import ModalTransaction from '@/components/organisms/modal-transaction/modal-transaction';
import ModalEdit from '@/components/organisms/edit-transaction/edit-transaction';
import { getFromStorage } from '@/utils/storage';

interface Transaction {
  id: number;
  paymentMethod:string;
  movement:string;
  value: string;
  establishmentType:string;
  transactionDate: Dayjs | null; 

}

const TransactionPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransactionId, setEditingTransactionId] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTransactionId(null); // Adicione isso para limpar o ID ao fechar o modal
  };

  useEffect(() => {
    const storedTransactions = getFromStorage<Transaction[]>('transactions');
    if (storedTransactions) {
      const transactionsWithValidDates = storedTransactions.map(transaction => ({
        ...transaction,
        transactionDate: transaction.transactionDate ? dayjs(transaction.transactionDate) : null,
      }));
      setTransactions(transactionsWithValidDates);
    }
  }, []);

  return (
    <div className="transaction-page">
      <h1>Transações</h1>
      <button className="new-transaction-button" onClick={openModal}>
        Nova Transação
      </button>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <span>
              {transaction.id} - R$ {transaction.value} - {transaction.paymentMethod} - {transaction.establishmentType} - {transaction.movement} - 
              {transaction.transactionDate && transaction.transactionDate.isValid() 
                ? transaction.transactionDate.format('DD/MM/YYYY HH:mm') 
                : 'Data não disponível'}
            </span>

            <button 
              onClick={() => {
                console.log('Editando transação com ID:', transaction.id);
                setEditingTransactionId(transaction.id);
                openModal();
              }}
            >
              Editar Transação
            </button>
          </div>
        ))
      ) : (
        <p>Nenhuma transação encontrada.</p>
      )}

      {/* Modal para nova transação */}
      <ModalWrapper isOpen={isModalOpen && editingTransactionId === null} title="">
        <ModalTransaction closeModal={closeModal} />
      </ModalWrapper>

       {/* Modal para edição de transação */}
       <ModalWrapper isOpen={isModalOpen && editingTransactionId !== null} title="">
        <ModalEdit closeModal={closeModal} transactionId={editingTransactionId} />
      </ModalWrapper>
    </div>
  );
};

export default TransactionPage;
