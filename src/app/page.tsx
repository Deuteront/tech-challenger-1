'use client';

import React from 'react';

import './style.scss';
import { Header } from '@/components/organisms/home/header/header';
import { Body } from '@/components/organisms/home/body/body';
import { Footer } from '@/components/organisms/home/footer/footer';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
