import { useCallback } from 'react';
import type { PaymentMethod, Transaction, TransactionType } from '../types';
import { STORAGE_KEYS } from '../utils/constants';
import useLocalStorage from './useLocalStorage';

export interface TransactionFormValues {
  type: TransactionType;
  amount: number;
  description: string;
  date: string;
  paymentMethod: PaymentMethod;
  tagId: string;
}

const initialTransactions: Transaction[] = [
  {
    id: 'tx-1',
    type: 'income',
    amount: 3800000,
    description: 'Pago mensual',
    date: '2026-03-30',
    paymentMethod: 'transfer',
    tagId: 'trabajo',
  },
  {
    id: 'tx-2',
    type: 'expense',
    amount: 280000,
    description: 'Mercado quincenal',
    date: '2026-03-29',
    paymentMethod: 'card',
    tagId: 'alimentacion',
  },
  {
    id: 'tx-3',
    type: 'expense',
    amount: 45000,
    description: 'Taxi aeropuerto',
    date: '2026-03-28',
    paymentMethod: 'cash',
    tagId: 'transporte',
  },
];

function buildTransaction(values: TransactionFormValues): Transaction {
  return {
    id: `tx-${Date.now()}`,
    ...values,
  };
}

function useTransactions() {
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>(STORAGE_KEYS.TRANSACTIONS, initialTransactions);

  const addTransaction = useCallback(
    (values: TransactionFormValues) => {
      setTransactions((prev) => [buildTransaction(values), ...prev]);
    },
    [setTransactions],
  );

  const updateTransaction = useCallback(
    (id: string, values: TransactionFormValues) => {
      setTransactions((prev) => prev.map((item) => (item.id === id ? { ...item, ...values } : item)));
    },
    [setTransactions],
  );

  const deleteTransaction = useCallback(
    (id: string) => {
      setTransactions((prev) => prev.filter((item) => item.id !== id));
    },
    [setTransactions],
  );

  return {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  };
}

export default useTransactions;
