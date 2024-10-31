import { transaction } from '@/components/organisms/modal-transaction/modal-transaction.type';
import { getFromStorage, saveToStorage } from '@/utils/storage';

export const initialTransactionData: transaction = {
  value: 0.0,
  movement: '',
  paymentMethod: '',
  establishmentType: '',
  transactionDate: null,
  desc: '',
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
    const storedTransactions =
      (getFromStorage(transactionsName) as transaction[]) || [];

    const newTransaction = {
      ...transactionData,
      id: generateTransactionId(),
    };

    storedTransactions.push(newTransaction);
    saveToStorage(transactionsName, storedTransactions);
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

export const transactionsName = 'transactions';

export const MOVEMENT_OPTIONS = [
  { value: 'incoming', text: 'Entrada', arithmeticOperator: '+' },
  { value: 'outgoing', text: 'Saída', arithmeticOperator: '-' },
];
const arithmeticOperatorMap = new Map(
  MOVEMENT_OPTIONS.map(({ value, arithmeticOperator }) => [
    value,
    arithmeticOperator,
  ])
);

export const getArithmeticOperator = (value: string) =>
  arithmeticOperatorMap.get(value) || 'Operador desconhecido';

export const PAYMENT_METHOD_OPTIONS = [
  { value: 'dinheiro', text: 'Dinheiro' },
  { value: 'cartão', text: 'Cartão' },
  { value: 'pix', text: 'Pix' },
];

const paymentMethodMap = new Map(
  PAYMENT_METHOD_OPTIONS.map(({ value, text }) => [value, text])
);

export const getPaymentMethodText = (value: string) =>
  paymentMethodMap.get(value) || 'Método de pagamento desconhecido';

export const ESTABLISHMENT_TYPE_OPTIONS = [
  { value: 'conta', text: 'Conta', icon: 'grey-boleto' },
  { value: 'alimentação', text: 'Alimentação', icon: 'grey-fork' },
  { value: 'guardar', text: 'Guardar', icon: 'grey-pig' },
];

const iconMap = new Map(
  ESTABLISHMENT_TYPE_OPTIONS.map(({ value, icon }) => [value, icon])
);

export const getIconEstablishment = (iconTransaction: string) =>
  iconMap.get(iconTransaction) || 'grey-boleto';

export const getTransactionById = (
  transactionId: transaction['id']
): transaction | null => {
  const storedTransactions =
    (getFromStorage(transactionsName) as transaction[]) || [];
  return storedTransactions.find((t) => t.id === Number(transactionId)) || null;
};

// Função para atualizar transações
export const updateTransactions = (
  transactionData: transaction | null,
  transactionId: transaction['id']
) => {
  const storedTransactions =
    (getFromStorage(transactionsName) as transaction[]) || [];
  return storedTransactions.map((t) =>
    t.id === Number(transactionId) ? transactionData : t
  );
};

// Função para salvar as transações no localStorage
export const handleSave = (
  transactionData: transaction | null,
  transactionId: transaction['id'],
  closeModal: () => void
) => {
  const updatedTransactions = updateTransactions(
    transactionData,
    transactionId
  );
  saveToStorage(transactionsName, updatedTransactions);
  closeModal();
};
