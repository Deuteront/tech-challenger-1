import React from 'react';
import { props } from '@/components/atoms/select/select.type';
import './style.scss';

export function Select({ value, onChange, options, className }: props) {
  return (
    <select value={value} onChange={onChange} className={className.join(' ')}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
