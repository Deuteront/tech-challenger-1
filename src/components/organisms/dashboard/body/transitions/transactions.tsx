import React from 'react';
import './style.scss';
import Image from 'next/image';
import { optionsTransactionsDetails } from './transactions-list.type';


export function TransactionsDetails({
    iconTransaction,
    transactionPlace,
    paymentMethod,
    transactionPrice,
    transactionDate,
    incomingOrOutgoing,
}: optionsTransactionsDetails) {

    let displayText;

    if (incomingOrOutgoing === 'outgoing') {
      displayText = '-';
    } else {
      displayText = '+';
    }

  return (
    <div className='row'>
      <div className="transactions-list d-flex flex-row justify-content-between pt-3 pb-3">
        <div className="col-8">
          <div className="d-flex flex-row">
            <div className="transactions-icon me-3">
              <Image src={`/svgs/${iconTransaction}.svg`} 
                alt=''
                width={40}
                height={40}
              />
            </div>
            <div className="flex-column">
              <div className="transactions-list-title">
                {transactionPlace}
              </div>
              <div className="transactions-type">
                {paymentMethod}
              </div>
            </div>
          </div>
        </div>

        <div className="transaction-details d-flex flex-row align-self-stretch">
          <div className="d-flex flex-column align-items-end mt-2 me-2">
            <div className="transaction-date mb-2">
              {transactionDate}
            </div>
            <div className="transaction-price">
              <p className={incomingOrOutgoing}>
                {displayText}
                {transactionPrice}
              </p>
            </div>
          </div>

          <div className="d-flex flex-column">
            <button>
              <img src="/svgs/grey-edit.svg" className="" />
            </button>
            <button>
              <img src="/svgs/grey-delete.svg" />
            </button>
          </div>
        </div>
      </div>

      <hr className="hr" />
    </div>
  );
}
