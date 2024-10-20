import { Dayjs } from 'dayjs';

export type transaction = {
    value: string;
    movement: string;
    paymentMethod: string;
    establishmentType: string;
    transactionDate: Dayjs | null;
  };