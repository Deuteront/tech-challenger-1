import React from 'react';
import './style.scss';
import Image from 'next/image';
import { optionsTransactionsDetails } from './transactions-list.type';
import { Transaction } from '@/components/organisms/edit-transaction/edit-transaction.type';
import { Button } from '@/components/atoms/button/button';

export function TransactionsDetails({
  iconTransaction,
  transactionPlace,
  paymentMethod,
  transactionPrice,
  transactionDate,
  incomingOrOutgoing,
  transaction,
}: optionsTransactionsDetails) {
  let displayText;

  const getSinalzinho = (incomingOrOutgoing: string) => {
    if (incomingOrOutgoing === 'outgoing') {
      return '-';
    } else {
      return '+';
    }
  };

  return (
    <div className="transaction">
      <div className="transaction-title">
        <Image
          src={`/svgs/${iconTransaction}.svg`}
          alt={iconTransaction}
          width={40}
          height={40}
        />
        <div className="flex-column">
          <div className="transactions-list-title">{transactionPlace}</div>
          <div className="transactions-type">{paymentMethod}</div>
        </div>
      </div>

      <div className="transaction-desc">
        <div className="transaction-info">
          <div className="transaction-date">{transactionDate}</div>
          <div className={'transaction-price ' + incomingOrOutgoing}>
            {getSinalzinho(incomingOrOutgoing) + 'R$ ' + transactionPrice}
          </div>
        </div>
        <div className="transaction-edit">
          <Button
            onClick={() => {
              return;
            }}
            icon={'grey-edit.svg'}
            className={['transaction-button']}
          ></Button>
          <Button
            className={['transaction-button']}
            onClick={() => {
              return;
            }}
            icon={'grey-delete.svg'}
          ></Button>
        </div>
      </div>
    </div>
  );
}
