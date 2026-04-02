export type TransactionType = 'income' | 'expense';

export type PaymentMethod = 'cash' | 'card' | 'transfer';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  date: string;
  paymentMethod: PaymentMethod;
  tagId: string;
}
