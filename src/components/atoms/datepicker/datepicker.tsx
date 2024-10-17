import React from 'react';
import './style.scss';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

type CustomDatePickerProps = {
  label: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
};

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
          label={label}
          onChange={onChange}
          value={value}
          className="custom-input"
          viewRenderers={{
            hours: null,
            minutes: null,
            seconds: null,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
