'use client';

import React from 'react';
import { Header } from '@/components/organisms/home/header/header';
import { Body } from '@/components/organisms/dashboard/body/body';
// import { Body } from '@/components/organisms/home-debora/body/body';
// import { Header } from '@/components/organisms/home-debora/header-user/header-user';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default Dashboard;
