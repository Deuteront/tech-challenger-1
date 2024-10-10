'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';

import './style.scss';
import { Header } from '@/app/home/header/header';
import { Body } from '@/app/home/body/body';
import { Footer } from '@/app/home/footer/footer';

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    if (cookies.auth) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
