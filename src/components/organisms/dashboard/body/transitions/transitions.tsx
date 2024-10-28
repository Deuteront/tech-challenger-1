import React, { useState } from 'react';
import './style.scss';
import { Button } from '@/components/atoms/button/button';
import ModalWrapper from '@/components/atoms/modal-wrapper/modal-wrapper';
import ModalTransaction from '@/components/organisms/modal-transaction/modal-transaction';
import { TransactionsDetailsList } from './transactions-list';

export function Transitions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const transactionsList = [
    {
      iconTransaction: 'grey-fork',
      transactionPlace: 'Outback',
      paymentMethod: 'Cartão de crédito',
      transactionPrice: '150,00',
      transactionDate: '10 OUT',
      incomingOrOutgoing: 'outgoing',
    },
    {
      iconTransaction: 'grey-pig',
      transactionPlace: 'Poupança',
      paymentMethod: 'PIX',
      transactionPrice: '300,00',
      transactionDate: '10 OUT',
      incomingOrOutgoing: 'incoming',
    },
    {
      iconTransaction: 'grey-boleto',
      transactionPlace: 'Boleto',
      paymentMethod: 'PIX',
      transactionPrice: '500,00',
      transactionDate: '7 OUT',
      incomingOrOutgoing: 'outgoing',
    },
  ];

  return (
    <>
      <div className="transactions container pt-3">
        <div className="row mb-3">
          <div className="d-flex flex-row justify-content-between">
            <span className="transactions-title">Transações recentes</span>
            <Button
              onClick={openModal}
              icon="plus.svg"
              className={['button', 'primary-button', 'add-button-transitions']}
            ></Button>
          </div>
        </div>
        <TransactionsDetailsList transactionsList={transactionsList} />
      </div>
      <div style={{ height: '100%' }}>
        <ModalWrapper isOpen={isModalOpen} title="">
          <ModalTransaction closeModal={closeModal} />
        </ModalWrapper>
      </div>
    </>
  );
}
