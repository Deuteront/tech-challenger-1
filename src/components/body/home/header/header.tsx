import { Button } from '@/components/atoms/button/button';
import React from 'react';
import './style.scss';
import { Logo } from '@/components/body/logo/logo';
import { useRouter } from 'next/navigation';

type props = {
  isHome?: boolean;
};

export function Header({ isHome }: props) {
  const router = useRouter();
  const handleDashboard = () => router.push('/dashboard');
  return (
    <div className="header">
      <Logo />
      {isHome && (
        <div className="login">
          <Button
            onClick={handleDashboard}
            className={['button', 'primary-button']}
            text="Começar agora"
          ></Button>
        </div>
      )}
    </div>
  );
}
