import React from 'react';
import './style.scss';
import { Button } from '@/components/button/button';
import Image from 'next/image';
import { AdvantageList } from '@/components/advantage/advantage-list';

export function Body() {
  const advantages = [
    {
      text: 'Relatórios e análises em tempo real',
      icon: 'graph',
      image: 'graph2',
    },
    {
      text: 'Gerencie suas finanças sem complicações',
      icon: 'pig',
      image: 'pig2',
    },
    {
      text: 'Notificações para não deixar passar nada',
      icon: 'ad',
      image: 'ad2',
    },
  ];
  return (
    <div className="body">
      <div className="initial-scream">
        <div className="container-invite">
          <div className="invite">
            <span className="title">
              Controle suas finanças na palma da sua pata.
            </span>
            <span className="sub-title">Crie sua conta com a gente!</span>
            <Button
              onClick={() => {
                console.log('faço nd');
              }}
              className={['button', 'primary-button']}
              text="Começar agora"
            ></Button>
          </div>
          <div className="cat-paw">
            <Image src="/png/cat.png" alt="cat-paw" width="377" height="482" />
          </div>
        </div>
        <div className="wave">
          <div className="wave-login">
            <span className="has-login">Já tem uma conta?</span>
            <a className="login">Faça o login</a>
          </div>
        </div>
      </div>
      {<AdvantageList advantage={advantages} className="advantage-list" />}
    </div>
  );
}
