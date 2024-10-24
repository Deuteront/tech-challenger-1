'use client';

import React from 'react';
import { Header } from '@/components/organisms/home/header/header';
import { Body } from '@/components/organisms/dashboard/body/body';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default Dashboard;
