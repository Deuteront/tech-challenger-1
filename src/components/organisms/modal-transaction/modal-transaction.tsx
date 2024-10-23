import React, { useState } from 'react';
import { CustomSelect } from '@/components/atoms/select/select';
import { CustomDatePicker } from '@/components/atoms/datepicker/datepicker';
import NavigationButtons from '@/components/molecules/navigation-buttons/navigation-buttons';
import './style.scss';
import { InputCurrency } from '@/components/molecules/input-currency/input-currency';
import { initialTransactionData, handleNext, handlePrev } from './constants';

interface ModalContentProps {
  closeModal: () => void;
}

const ModalTransaction: React.FC<ModalContentProps> = ({ closeModal }) => {
  const [step, setStep] = useState(0);
  const [transactionData, setTransactionData] = useState(
    initialTransactionData
  );

  return (
    <div className="modal-transaction">
      {step === 0 && (
        <div className="body-modal-transaction">
          <h2>Qual é o valor da transação?</h2>
          <InputCurrency
            value={transactionData.value}
            label="Valor"
            onChange={(e) =>
              setTransactionData({ ...transactionData, value: e.target.value })
            }
          />
        </div>
      )}

      {step === 1 && (
        <div className="body-modal-transaction">
          <h2>Como você gostaria de classificar essa transação?</h2>
          <CustomSelect
            value={transactionData.movement}
            label="Movimentação"
            onChange={(e) =>
              setTransactionData({
                ...transactionData,
                movement: e.target.value,
              })
            }
            options={[
              { value: 'entrada', text: 'Entrada' },
              { value: 'saída', text: 'Saída' },
            ]}
          />
          <CustomSelect
            label="Método de pagamento"
            value={transactionData.paymentMethod}
            onChange={(e) =>
              setTransactionData({
                ...transactionData,
                paymentMethod: e.target.value,
              })
            }
            options={[
              { value: 'dinheiro', text: 'Dinheiro' },
              { value: 'cartão', text: 'Cartão' },
              { value: 'pix', text: 'Pix' },
            ]}
          />
          <CustomSelect
            value={transactionData.establishmentType}
            label="Tipo de estabelecimento"
            onChange={(e) =>
              setTransactionData({
                ...transactionData,
                establishmentType: e.target.value,
              })
            }
            options={[
              { value: 'alimentação', text: 'Alimentação' },
              { value: 'conta', text: 'Conta' },
            ]}
          />
          <CustomDatePicker
            label="Data da transação"
            value={transactionData.transactionDate}
            onChange={(e) =>
              setTransactionData({
                ...transactionData,
                transactionDate: e,
              })
            }
          />
        </div>
      )}

      {step === 2 && (
        <div className="body-modal">
          <h2>Transação adicionada com sucesso!</h2>
        </div>
      )}

      <NavigationButtons
        closeModal={closeModal}
        handleNext={() =>
          handleNext(step, setStep, transactionData, closeModal)
        }
        handlePrev={() => handlePrev(step, setStep)}
        isLastStep={step === 2}
        isFirstStep={step === 0}
      />
    </div>
  );
};

export default ModalTransaction;
