import React from 'react';
import { props } from '@/components/atoms/input/input.type';
import './style.scss';
import { TextField } from '@mui/material';

export function Input({ label, value, onChange }: props) {
  return (
    <TextField
      className="custom-input"
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      fullWidth
    />
  );
}