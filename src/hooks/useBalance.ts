import { useMemo } from 'react';
import type { Transaction } from '../types';

interface BalanceMetrics {
  income: number;
  expense: number;
  balance: number;
  expenseByTag: Record<string, number>;
  incomeByTag: Record<string, number>;
}

function useBalance(transactions: Transaction[]): BalanceMetrics {
  return useMemo(() => {
    let income = 0;
    let expense = 0;
    const expenseByTag: Record<string, number> = {};
    const incomeByTag: Record<string, number> = {};

    for (const tx of transactions) {
      if (tx.type === 'income') {
        income += tx.amount;
        incomeByTag[tx.tagId] = (incomeByTag[tx.tagId] || 0) + tx.amount;
      } else {
        expense += tx.amount;
        expenseByTag[tx.tagId] = (expenseByTag[tx.tagId] || 0) + tx.amount;
      }
    }

    return {
      income,
      expense,
      balance: income - expense,
      expenseByTag,
      incomeByTag,
    };
  }, [transactions]);
}

export default useBalance;
