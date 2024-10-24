import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { CustomSelect } from '@/components/atoms/select/select';
import { CustomDatePicker } from '@/components/atoms/datepicker/datepicker';
import NavigationButtons from '@/components/molecules/navigationbuttons/navigationbuttons';
import { InputCurrency } from '@/components/molecules/input-currency/input-currency';
import { Transaction } from './edit-transaction.type'; // Importa o tipo
import {
  MOVEMENT_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
  ESTABLISHMENT_TYPE_OPTIONS,
  handleSave,
  getTransactionById,
} from './constants'; // Importa as constantes

interface ModalEditProps {
  closeModal: () => void;
  transactionId: number | null; // Recebe o ID da transação que será editada
}

const ModalEdit: React.FC<ModalEditProps> = ({ closeModal, transactionId }) => {
  const [step, setStep] = useState(0); // Controle de navegação entre passos
  const [transactionData, setTransactionData] = useState<Transaction | null>(null);

  // Carrega a transação do localStorage ao abrir o modal
  useEffect(() => {
    const selectedTransaction = getTransactionById(transactionId); // Utiliza a função para obter a transação
    if (selectedTransaction) {
      // Converte a data da transação para dayjs, se existir
      const transactionWithValidDate = {
        ...selectedTransaction,
        transactionDate: selectedTransaction.transactionDate 
          ? dayjs(selectedTransaction.transactionDate) 
          : null,
      };
      setTransactionData(transactionWithValidDate); // Carrega a transação com a data validada
    }
  }, [transactionId]);

  if (!transactionData) {
    return <div>Carregando...</div>; // Exibe uma mensagem enquanto carrega os dados
  }

  return (
    <div className="modal">
      {step === 0 && (
        <div className="body-modal">
          <h2>Editar transação</h2>
          <InputCurrency
            value={transactionData.value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })} // Formata o valor como string para exibição
            label="Valor"
            onChange={(e) => {
              const rawValue = e.target.value.replace(/[^\d,]/g, '').replace(',', '.'); // Remove tudo, exceto dígitos e vírgulas
              const numberValue = parseFloat(rawValue);
              if (!isNaN(numberValue)) {
                setTransactionData({ ...transactionData, value: numberValue }); // Atualiza o estado com o valor numérico
              }
            }}
          />
          <CustomSelect
            value={transactionData.movement}
            label="Movimentação"
            onChange={(e) =>
              setTransactionData({ ...transactionData, movement: e.target.value })
            }
            options={MOVEMENT_OPTIONS} // Utiliza as constantes
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
            options={PAYMENT_METHOD_OPTIONS} // Utiliza as constantes
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
            options={ESTABLISHMENT_TYPE_OPTIONS} // Utiliza as constantes
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

      {step === 1 && (
        <div className="body-modal">
          <h2>Transação atualizada com sucesso!</h2>
        </div>
      )}

      <NavigationButtons
        closeModal={closeModal}
        handleNext={() => {
          if (step < 1) {
            setStep(step + 1); // Vai para a próxima etapa
          } else {
            handleSave(transactionData, transactionId, closeModal); // Salva e fecha o modal
          }
        }}
        handlePrev={() => setStep(step - 1)} // Volta para o passo anterior
        isLastStep={step === 1}
        isFirstStep={step === 0}
      />
    </div>
  );
};

export default ModalEdit;
