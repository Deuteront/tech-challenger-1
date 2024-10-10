'use client';

import React from 'react';

import './style.scss';
import { Header } from '@/components/body/home/header/header';
import { Body } from '@/components/body/home/body/body';
import { Footer } from '@/components/body/home/footer/footer';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header isHome={true} />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
