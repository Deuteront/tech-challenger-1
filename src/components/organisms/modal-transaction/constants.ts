import { transaction } from '@/components/organisms/modal-transaction/modal-transaction.type';
import { getFromStorage, saveToStorage } from '@/utils/storage';

export const transactionsName = 'transactions';

export const initialTransactionData: transaction = {
  value: '',
  movement: '',
  paymentMethod: '',
  establishmentType: '',
  transactionDate: null,
};

export const handleNext = (
  step: number,
  setStep: (step: number) => void,
  transactionData: transaction,
  closeModal: () => void
) => {
  if (step < 2) {
    setStep(step + 1);
  } else {
    const transactionKey = transactionsName;
    const storedTransactions =
      (getFromStorage(transactionKey) as transaction[]) || [];

    const newTransaction = {
      ...transactionData,
      id: generateTransactionId(),
    };

    storedTransactions.push(newTransaction);
    saveToStorage(transactionKey, storedTransactions);
    closeModal();
  }
};

export const handlePrev = (step: number, setStep: (step: number) => void) => {
  if (step > 0) {
    setStep(step - 1);
  }
};

export const generateTransactionId = (): number => {
  const currentId = (getFromStorage('transactionIdCounter') as number) || 0;
  const newId = currentId + 1;
  saveToStorage('transactionIdCounter', newId);
  return newId;
};
