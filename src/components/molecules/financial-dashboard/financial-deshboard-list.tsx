import React from 'react';
import { FinancialDashboard } from '@/components/molecules/financial-dashboard/financial-dashboard';
import { propsfinancialDashboardList } from './financial-dashboard.type';

export function FinancialDashboardList({ financialDashboard, className }: propsfinancialDashboardList) {
  return (
    <div className={className}>
      {financialDashboard.map((item, index) => (
        <FinancialDashboard key={index} {...item} />
      ))}
    </div>
  );
}
