import React, { useEffect, useState } from 'react';
import { Input } from '@/components/atoms/input/input';

interface InputCurrencyProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputCurrency({ label, value, onChange }: InputCurrencyProps) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized && value === '') {
      onChange({
        target: { value: 'R$ 0,00' },
      } as React.ChangeEvent<HTMLInputElement>);
      setInitialized(true);
    }
  }, [initialized, value, onChange]);
  const [error, setError] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue === '') {
      onChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
      return;
    }
    const rawValue = inputValue.replace(/\D/g, '');

    let numberValue = parseFloat(rawValue) / 100;

    if (numberValue < 0.01) {
      numberValue = 0.01;
      setError(true);
    } else {
      setError(false);
    }

    const formattedValue = numberValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    onChange({
      target: { value: formattedValue },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <Input
      label={label}
      value={value}
      onChange={handleChange}
      error={error}
      helperText={error ? 'Valor mínimo é R$ 0,01' : ''}
    />
  );
}
