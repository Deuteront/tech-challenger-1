import React, { useState } from 'react';
import './style.scss';
import { Button } from '@/components/atoms/button/button';
import ModalWrapper from '@/components/atoms/modal-wrapper/modal-wrapper';
import ModalTransaction from '@/components/organisms/modal-transaction/modal-transaction';

export function Transitions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="title">Transações</span>
            <Button
              onClick={openModal}
              icon="plus.svg"
              className={['button', 'primary-button', 'add-button-transitions']}
            ></Button>
          </div>
        </div>
      </div>
      <div style={{ height: '100%' }}>
        <ModalWrapper isOpen={isModalOpen} title="">
          <ModalTransaction closeModal={closeModal} />
        </ModalWrapper>
      </div>
    </>
  );
}
