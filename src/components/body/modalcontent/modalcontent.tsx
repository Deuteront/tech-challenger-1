import React, { useState } from 'react';
import { Input } from '@/components/atoms/input/input';
import { Select } from '@/components/atoms/select/select';
import { DateInput } from '@/components/atoms/datepicker/datepicker';
import NavigationButtons from '@/components/molecules/navigationbuttons/navigationbuttons';
import { saveToStorage } from '@/utils/storage';
import { getFromStorage } from '@/utils/storage';
import './style.scss';

// Definindo a interface para as props do ModalContent
interface ModalContentProps {
  closeModal: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ closeModal }) => {
  const [step, setStep] = useState(0);
  const [transactionData, setTransactionData] = useState({
    value: '',
    movement: '',
    paymentMethod: '',
    establishmentType: '',
    transactionDate: '',
  });

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      const transactionKey = 'transactions';
      let storedTransactions = getFromStorage(transactionKey) || [];

      storedTransactions.push(transactionData);
      saveToStorage(transactionKey, storedTransactions);
      closeModal();
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="modal">
      {step === 0 && (
        <div>
          <h2>Qual é o valor da transação?</h2>
          <Input
            value={transactionData.value}
            onChange={(e) => {setTransactionData({ ...transactionData, value: e.target.value })}}
            placeholder="R$ 0,00"
            className={['input']}
          />
          <div>
            <button className="button" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h2>Como você gostaria de classificar essa transação?</h2>
          <Select
            value={transactionData.movement}
            onChange={(e) => setTransactionData({ ...transactionData, movement: e.target.value })}
            options={[
              { value: '', label: 'Movimentação' },
              { value: 'entrada', label: 'Entrada' },
              { value: 'saída', label: 'Saída' },
            ]}
            className={['select']}
          />
          <Select
            value={transactionData.paymentMethod}
            onChange={(e) => setTransactionData({ ...transactionData, paymentMethod: e.target.value })}
            options={[
              { value: '', label: 'Método de pagamento' },
              { value: 'dinheiro', label: 'Dinheiro' },
              { value: 'cartão', label: 'Cartão' },
              { value: 'pix', label: 'Pix' },
            ]}
            className={['select']}
          />
          <Select
            value={transactionData.establishmentType}
            onChange={(e) => setTransactionData({ ...transactionData, establishmentType: e.target.value })}
            options={[
              { value: '', label: 'Tipo de estabelecimento' },
              { value: 'alimentação', label: 'Alimentação' },
              { value: 'conta', label: 'Conta' },
            ]}
            className={['select']}
          />
          <DateInput
            value={transactionData.transactionDate}
            onChange={(e) => setTransactionData({ ...transactionData, transactionDate: e.target.value })}
            className={['date-input']}
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Transação adicionada com sucesso!</h2>
        </div>
      )}

      <NavigationButtons
        handleNext={handleNext}
        handlePrev={handlePrev}
        isLastStep={step === 2}
        isFirstStep={step===0}
      />
    </div>
  );
};

export default ModalContent;
