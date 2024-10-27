import React from 'react';
import './style.scss';
import Image from 'next/image';
import { props } from '@/components/molecules/card-balance-actual/card-balance-actual.type';

export function CardBalanceActual({ textValue, icon }: props) {
  return (
    <div className="card-balance-actual">
      <div className="icon">
        <span> Seu saldo atual </span>
        <Image src={`/svgs/${icon}.svg`} alt={icon} width="18" height="42" />
      </div>
      <div className="context-card-balance-actual">
        <span>{textValue}</span>
      </div>
    </div>
  );
}