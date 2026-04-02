import { useCallback, useMemo } from 'react';
import type { Budget, Transaction } from '../types';
import { STORAGE_KEYS } from '../utils/constants';
import useLocalStorage from './useLocalStorage';

interface BudgetWithSpent extends Budget {
  spent: number;
  percentage: number;
  status: 'normal' | 'warning' | 'overflow';
}

function useBudgets(transactions: Transaction[]) {
  const [budgets, setBudgets] = useLocalStorage<Budget[]>(STORAGE_KEYS.BUDGETS, []);

  const addBudget = useCallback(
    (tagId: string, limit: number) => {
      if (budgets.some((b) => b.tagId === tagId)) {
        return;
      }
      setBudgets((prev) => [...prev, { id: `budget-${Date.now()}`, tagId, limit, period: 'monthly' }]);
    },
    [budgets, setBudgets],
  );

  const updateBudget = useCallback(
    (id: string, limit: number) => {
      setBudgets((prev) => prev.map((b) => (b.id === id ? { ...b, limit } : b)));
    },
    [setBudgets],
  );

  const deleteBudget = useCallback(
    (id: string) => {
      setBudgets((prev) => prev.filter((b) => b.id !== id));
    },
    [setBudgets],
  );

  const budgetsWithSpent: BudgetWithSpent[] = useMemo(() => {
    const expenseByTag: Record<string, number> = {};
    for (const tx of transactions) {
      if (tx.type === 'expense') {
        expenseByTag[tx.tagId] = (expenseByTag[tx.tagId] || 0) + tx.amount;
      }
    }

    return budgets.map((budget) => {
      const spent = expenseByTag[budget.tagId] || 0;
      const percentage = budget.limit > 0 ? Math.round((spent / budget.limit) * 100) : 0;
      let status: 'normal' | 'warning' | 'overflow' = 'normal';
      if (percentage >= 100) {
        status = 'overflow';
      } else if (percentage >= 75) {
        status = 'warning';
      }
      return { ...budget, spent, percentage, status };
    });
  }, [budgets, transactions]);

  return {
    budgets,
    budgetsWithSpent,
    addBudget,
    updateBudget,
    deleteBudget,
  };
}

export default useBudgets;
