import Image from 'next/image';
import { Button } from '@/components/button/button';
import React from 'react';
import './style.scss';
import { Logo } from '@/components/logo/logo';

export function Header() {
  return (
    <div className="header">
      <Logo />
      <div className="menu">
        <a href="/Inicio">Inicio</a>
        <a href="/Sobre">Sobre</a>
        <a href="/Precos">Preços</a>
      </div>
      <div className="login">
        <Button
          onClick={() => {
            console.log('faço nd');
          }}
          className={['button']}
          text="Iniciar sessão"
        ></Button>
        <Button
          onClick={() => {
            console.log('faço nd');
          }}
          className={['button', 'primary-button']}
          text="Começar agora"
        ></Button>
      </div>
    </div>
  );
}
