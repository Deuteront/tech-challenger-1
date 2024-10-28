import { Transaction } from '@/components/organisms/edit-transaction/edit-transaction.type';

export type optionsTransactionsDetails = {
  iconTransaction: string;
  transactionPlace: string;
  paymentMethod: string;
  transactionPrice: string;
  transactionDate: string;
  incomingOrOutgoing: string;
  transaction?: Transaction;
};

export type transactionsDetails = {
  transactionsList: optionsTransactionsDetails[];
};
