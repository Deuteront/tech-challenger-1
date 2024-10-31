'use client';

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/atoms/input/input';

interface InputCurrencyProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function InputCurrency({ label, value, onChange }: InputCurrencyProps) {
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    setDisplayValue(formatCurrency(value));
  }, [value]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(num);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, '');

    if (inputValue === '') {
      setDisplayValue('');
      onChange(0);
    } else {
      const numericValue = parseFloat(inputValue) / 100;
      setDisplayValue(formatCurrency(numericValue));
      onChange(numericValue);
    }
  };

  return (
    <Input
      label={label}
      value={displayValue}
      onChange={handleChange}
      type="text"
      helperText={displayValue === 'R$ 0,00' ? 'Valor mínimo é R$ 0,01' : ''}
    />
  );
}
