import React from 'react';
import { props } from '@/components/atoms/datepicker/datepicker.type';
import './style.scss';

export function DateInput({ value, onChange, className }: props) {
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      className={className.join(' ')}
    />
  );
}
