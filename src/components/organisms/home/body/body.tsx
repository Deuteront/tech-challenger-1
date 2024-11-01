'use client';

import React, { useEffect, useState } from 'react';
import './style.scss';
import { WelcomeMessage } from '@/components/organisms/home/welcome-message/welcome-message';
import { FinancialDashboardList } from '@/components/molecules/financial-dashboard/financial-deshboard-list';
import { CardBalanceActual } from '@/components/molecules/card-balance-actual/card-balance-actual';
import { Transitions } from '@/components/organisms/dashboard/body/transitions/transitions';
import { ESTABLISHMENT_TYPE_SAVE } from '@/components/organisms/modal-transaction/constants';
import { useTransactionContext } from '@/components/organisms/providers/transaction-context';

type financialDashboard = {
  icon: string;
  textTitle: string;
  textValue: string;
  financialHistory: string;
};

export function Body() {
  const { transactions } = useTransactionContext();
  const financialHistoryLastMouth = 'Relação desde o inicio';
  const [financialDashboards, setFinancialDashboards] = useState<
    financialDashboard[]
  >([
    {
      icon: 'indicador_card_Icon_up',
      textTitle: 'Entradas',
      textValue: '----',
      financialHistory: financialHistoryLastMouth,
    },
    {
      icon: 'indicador_card_Icon_low',
      textTitle: 'Saídas',
      textValue: '----',
      financialHistory: financialHistoryLastMouth,
    },
    {
      icon: 'indicador_card_Icon_pig',
      textTitle: 'Total guardado',
      textValue: '----',
      financialHistory: '',
    },
  ]);
  const [totalValue, setTotalValue] = useState<String>('----');
  useEffect(() => {
    const totalIncoming = transactions?.reduce((acc, transaction) => {
      return transaction.movement === 'incoming' &&
        transaction.establishmentType !== ESTABLISHMENT_TYPE_SAVE
        ? acc + transaction.value
        : acc;
    }, 0);
    const totalOutgoing = transactions?.reduce((acc, transaction) => {
      return transaction.movement === 'outgoing'
        ? acc + transaction.value
        : acc;
    }, 0);

    const totalSaved = transactions?.reduce((acc, transaction) => {
      return transaction.establishmentType === ESTABLISHMENT_TYPE_SAVE
        ? acc + transaction.value
        : acc;
    }, 0);

    setFinancialDashboards([
      {
        icon: 'indicador_card_Icon_up',
        textTitle: 'Entradas',
        textValue: totalIncoming?.toFixed(2) || '0',
        financialHistory: financialHistoryLastMouth,
      },
      {
        icon: 'indicador_card_Icon_low',
        textTitle: 'Saídas',
        textValue: totalOutgoing?.toFixed(2) || '0',
        financialHistory: financialHistoryLastMouth,
      },
      {
        icon: 'indicador_card_Icon_pig',
        textTitle: 'Total guardado',
        textValue: totalSaved?.toFixed(2) || '0',
        financialHistory: '',
      },
    ]);

    setTotalValue(
      'R$ ' + ((totalIncoming || 0) - (totalOutgoing || 0)).toFixed(2)
    );
  }, [transactions]);
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-12 context-body-home">
              <div className="welcome-container">
                <WelcomeMessage />
                <CardBalanceActual
                  icon="visibility"
                  textValue={totalValue?.toString()}
                />
                <FinancialDashboardList
                  financialDashboard={financialDashboards}
                  className="financial-dashboard-list"
                />
              </div>
              <div className="separation"></div>
              <Transitions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
