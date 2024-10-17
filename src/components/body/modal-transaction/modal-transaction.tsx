import React, { useState } from 'react';
import { CustomSelect } from '@/components/atoms/select/select';
import { CustomDatePicker } from '@/components/atoms/datepicker/datepicker';
import NavigationButtons from '@/components/molecules/navigationbuttons/navigationbuttons';
import { saveToStorage } from '@/utils/storage';
import { getFromStorage } from '@/utils/storage';
import './style.scss';
import { InputCurrency } from '@/components/molecules/input-currency/input-currency';
import { Button } from '@/components/atoms/button/button';
import { Dayjs } from 'dayjs';

interface ModalContentProps {
  closeModal: () => void;
}

//TODO: Separar em um arquivo de type
type transaction = {
  value: string;
  movement: string;
  paymentMethod: string;
  establishmentType: string;
  transactionDate: Dayjs | null;
};

//TODO: Criar um arquivo para colocar as variaveis do stage
const transactionsName = 'transactions';

const ModalTransaction: React.FC<ModalContentProps> = ({ closeModal }) => {
  const [step, setStep] = useState(0);
  const [transactionData, setTransactionData] = useState<transaction>({
    value: '',
    movement: '',
    paymentMethod: '',
    establishmentType: '',
    transactionDate: null,
  });

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      const transactionKey = transactionsName;
      const storedTransactions =
        (getFromStorage(transactionKey) as transaction[]) || [];

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
        <div className="body-modal">
          <h2>Qual é o valor da transação?</h2>
          <InputCurrency
            value={transactionData.value}
            label="Valor"
            onChange={(e) =>
              setTransactionData({ ...transactionData, value: e.target.value })
            }
          />
          <div>
            <Button
              className={['button']}
              onClick={closeModal}
              text={'Fechar'}
            ></Button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="body-modal">
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
        handleNext={handleNext}
        handlePrev={handlePrev}
        isLastStep={step === 2}
        isFirstStep={step === 0}
      />
    </div>
  );
};

export default ModalTransaction;
