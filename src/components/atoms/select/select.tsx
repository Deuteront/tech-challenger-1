import React from 'react';
import { props } from '@/components/atoms/select/select.type';
import './style.scss';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export function CustomSelect({ value, onChange, options, label }: props) {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
        className="custom-select"
      >
        {options.map(({ value, text }, index) => (
          <MenuItem key={index} value={value}>
            {text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
