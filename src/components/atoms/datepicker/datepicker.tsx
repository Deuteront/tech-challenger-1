import React from 'react';
import './style.scss';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FormControl, FormHelperText } from '@mui/material';

type CustomDatePickerProps = {
  label: string;
  value: Dayjs | null;
  error?: boolean;
  helperText?: string;
  onChange: (newValue: Dayjs | null) => void;
};

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
  error,
  helperText,
}) => {
  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue && newValue.isAfter(dayjs())) {
      onChange(newValue);
    } else {
      onChange(null);
    }
  };

  return (
    <FormControl fullWidth error={error}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label={label}
          onChange={handleDateChange}
          value={value}
          className="custom-input"
          slotProps={{
            textField: {
              error: error,
            },
          }}
          viewRenderers={{
            hours: null,
            minutes: null,
            seconds: null,
          }}
        />
      </LocalizationProvider>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
