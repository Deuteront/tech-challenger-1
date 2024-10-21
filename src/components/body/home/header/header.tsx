import React from 'react';
import './style.scss';
import { Logo } from '@/components/body/logo/logo';

export function Header() {
  return (
    <div className="header">
      <Logo />
    </div>
  );
}
