import { useMemo, useState } from 'react';
import type { PaymentMethod, Transaction, TransactionType } from '../types';

export interface TransactionFormValues {
  type: TransactionType;
  amount: number;
  description: string;
  date: string;
  paymentMethod: PaymentMethod;
  tagId: string;
}

const initialData: Transaction[] = [
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
  const [transactions, setTransactions] = useState<Transaction[]>(initialData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const addTransaction = (values: TransactionFormValues) => {
    setStatus('loading');
    setTransactions((prev) => [buildTransaction(values), ...prev]);
    setStatus('idle');
  };

  const updateTransaction = (id: string, values: TransactionFormValues) => {
    setTransactions((prev) => prev.map((item) => (item.id === id ? { ...item, ...values } : item)));
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  };

  const metrics = useMemo(() => {
    const income = transactions.filter((item) => item.type === 'income').reduce((acc, item) => acc + item.amount, 0);
    const expense = transactions.filter((item) => item.type === 'expense').reduce((acc, item) => acc + item.amount, 0);
    return {
      income,
      expense,
      balance: income - expense,
    };
  }, [transactions]);

  return {
    transactions,
    status,
    metrics,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  };
}

export default useTransactions;
