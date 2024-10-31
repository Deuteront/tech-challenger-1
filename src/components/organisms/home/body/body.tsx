'use client';

import React from 'react';
import './style.scss';
import { WelcomeMessage } from '@/components/organisms/home/welcome-message/welcome-message';
import { FinancialDashboardList } from '@/components/molecules/financial-dashboard/financial-deshboard-list';
import { CardBalanceActual } from '@/components/molecules/card-balance-actual/card-balance-actual';
import { Transitions } from '@/components/organisms/dashboard/body/transitions/transitions';

export function Body() {
  const financialDashboards = [
    {
      icon: 'indicador_card_Icon_up',
      textTitle: 'Entradas',
      textValue: 'R$ 5.231,99',
      financialHistory: 'Relação dos últimos 30 dias',
    },
    {
      icon: 'indicador_card_Icon_low',
      textTitle: 'Saídas',
      textValue: 'R$ 2.049,01',
      financialHistory: 'Relação dos últimos 30 dias',
    },
    {
      icon: 'indicador_card_Icon_pig',
      textTitle: 'Total guardado',
      textValue: 'R$ 2.049,01',
      financialHistory: '',
    },
  ];
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-12 context-body-home">
              <div className="welcome-container">
                <WelcomeMessage />
                <CardBalanceActual icon="visibility" textValue="R$ 3.182,98" />
                {
                  <FinancialDashboardList
                    financialDashboard={financialDashboards}
                    className="financial-dashboard-list"
                  />
                }
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
