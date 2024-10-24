
import { saveToStorage, getFromStorage } from '@/utils/storage';
import { Transaction } from './edit-transaction.type'; // Importa o tipo
import { transactionsName } from '@/components/organisms/modal-transaction/constants';

// Definições de opções
export const MOVEMENT_OPTIONS = [
  { value: 'entrada', text: 'Entrada' },
  { value: 'saída', text: 'Saída' },
];

export const PAYMENT_METHOD_OPTIONS = [
  { value: 'dinheiro', text: 'Dinheiro' },
  { value: 'cartão', text: 'Cartão' },
  { value: 'pix', text: 'Pix' },
];

export const ESTABLISHMENT_TYPE_OPTIONS = [
  { value: 'alimentação', text: 'Alimentação' },
  { value: 'conta', text: 'Conta' },
];

// Função para buscar a transação pelo ID
export const getTransactionById = (transactionId: number | null): Transaction | null => {
  const storedTransactions = (getFromStorage(transactionsName) as Transaction[]) || [];
  return storedTransactions.find((t) => t.id === Number(transactionId)) || null;
};

// Função para atualizar transações
export const updateTransactions = (transactionData: Transaction | null, transactionId: number | null) => {
  const storedTransactions = (getFromStorage(transactionsName) as Transaction[]) || [];
  return storedTransactions.map((t) =>
    t.id === Number(transactionId) ? transactionData : t
  );
};

// Função para salvar as transações no localStorage
export const handleSave = (transactionData: Transaction | null, transactionId: number | null, closeModal: () => void) => {
  const updatedTransactions = updateTransactions(transactionData, transactionId);
  saveToStorage(transactionsName, updatedTransactions);
  closeModal();
};


