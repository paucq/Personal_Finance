import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { Tag } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface ExpenseByTagProps {
  expenseByTag: Record<string, number>;
  tags: Tag[];
}

function ExpenseByTag({ expenseByTag, tags }: ExpenseByTagProps): JSX.Element {
  const data = Object.entries(expenseByTag)
    .map(([tagId, amount]) => {
      const tag = tags.find((t) => t.id === tagId);
      return {
        name: tag?.name ?? tagId,
        value: amount,
        color: tag?.color ?? '#6b7280',
      };
    })
    .sort((a, b) => b.value - a.value);

  if (data.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-app-border p-4 text-sm text-app-muted">
        No hay gastos registrados para mostrar distribucion.
      </div>
    );
  }

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatCurrency(Number(value))} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseByTag;
