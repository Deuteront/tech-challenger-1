import { Dayjs } from 'dayjs';

export interface Transaction {
  id: number;
  value: number;
  movement: string;
  paymentMethod: string;
  establishmentType: string;
  transactionDate: Dayjs | null;
}
