export type optionsTransactionsDetails = {
    iconTransaction: string,
    transactionPlace: string,
    paymentMethod: string,
    transactionPrice: string,
    transactionDate: string,
    incomingOrOutgoing: string
};

export type transactionsDetails = {
    transactionsList: optionsTransactionsDetails[];
};
  