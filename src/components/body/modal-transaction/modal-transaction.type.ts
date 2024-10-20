import { Dayjs } from 'dayjs';

export type transaction = {
  id?: number;
  value: string;
  movement: string;
  paymentMethod: string;
  establishmentType: string;
  transactionDate: Dayjs | null;
};
