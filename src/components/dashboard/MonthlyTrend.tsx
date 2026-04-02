import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import type { Transaction } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface MonthlyTrendProps {
  transactions: Transaction[];
}

interface MonthData {
  month: string;
  ingresos: number;
  gastos: number;
}

function MonthlyTrend({ transactions }: MonthlyTrendProps): JSX.Element {
  const data = useMemo<MonthData[]>(() => {
    const grouped: Record<string, { income: number; expense: number }> = {};

    for (const tx of transactions) {
      const month = tx.date.slice(0, 7);
      if (!grouped[month]) {
        grouped[month] = { income: 0, expense: 0 };
      }
      if (tx.type === 'income') {
        grouped[month].income += tx.amount;
      } else {
        grouped[month].expense += tx.amount;
      }
    }

    return Object.entries(grouped)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, data]) => ({
        month,
        ingresos: data.income,
        gastos: data.expense,
      }));
  }, [transactions]);

  if (data.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-app-border p-4 text-sm text-app-muted">
        No hay transacciones para mostrar tendencia mensual.
      </div>
    );
  }

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => formatCurrency(Number(value))} />
          <Bar dataKey="ingresos" fill="#10b981" name="Ingresos" />
          <Bar dataKey="gastos" fill="#ef4444" name="Gastos" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyTrend;
