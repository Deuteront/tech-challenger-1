import React from 'react';
import './style.scss';
import Image from 'next/image';
import { Button } from '@/components/atoms/button/button';
import dayjs from 'dayjs';
import { transactionModal } from '@/components/organisms/modal-transaction/modal-transaction.type';
import {
  getArithmeticOperator,
  getIconEstablishment,
  getPaymentMethodText,
} from '@/components/organisms/modal-transaction/constants';

export function TransactionsDetails({
  transaction,
  edit,
  exclude,
}: transactionModal) {
  const {
    transactionDate,
    paymentMethod,
    id,
    value,
    establishmentType,
    movement,
    desc,
  } = transaction;
  return (
    <div className="transaction">
      <div className="transaction-title">
        <Image
          src={`/svgs/${getIconEstablishment(establishmentType)}.svg`}
          alt={getIconEstablishment(establishmentType)}
          width={40}
          height={40}
        />
        <div className="flex-column">
          <div className="transactions-list-title">{desc}</div>
          <div className="transactions-type">
            {getPaymentMethodText(paymentMethod)}
          </div>
        </div>
      </div>
      <div className="transaction-desc">
        <div className="transaction-info">
          <div className="transaction-date">
            {dayjs(transactionDate).format('dddd, DD/MM/YYYY')}
          </div>
          <div className={'transaction-price ' + movement}>
            {getArithmeticOperator(movement) + 'R$ ' + value}
          </div>
        </div>
        <div className="transaction-edit">
          <Button
            onClick={() => {
              edit(id);
            }}
            icon={'grey-edit.svg'}
            className={['transaction-button']}
          ></Button>
          <Button
            className={['transaction-button']}
            onClick={() => {
              exclude(id);
            }}
            icon={'grey-delete.svg'}
          ></Button>
        </div>
      </div>
    </div>
  );
}
