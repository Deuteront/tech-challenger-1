import React from 'react';
import './style.scss';
import { WelcomeMessage } from '@/components/organisms/home-debora/welcome-message/welcome-message';
import { FinancialDashboardList } from '@/components/molecules/financial-dashboard/financial-deshboard-list';
import { CardBalanceActual } from '@/components/molecules/card-balance-actual/card-balance-actual';

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
        <div className="initial-scream">
          <div className="container-invite">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="context-body-home">
                    <WelcomeMessage />
                  </div>
                  <div className="context-body-home">
                    <CardBalanceActual
                      icon="visibility"
                      textValue="R$ 3.182,98"
                    />
                  </div>
                  <div>

                  </div>
                  <div className="context-body-home">
                    {
                      <FinancialDashboardList
                        financialDashboard={financialDashboards}
                        className="financial-dashboard-list"
                      />
                    }
                  </div>
                  <div className="divisi"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
