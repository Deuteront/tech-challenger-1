import React from 'react';
import { props } from '@/components/atoms/input/input.type';
import './style.scss';

export function Input({ value, onChange, placeholder, className }: props) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className.join(' ')}
    />
  );
}
