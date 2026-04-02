import type { Tag } from '../../types';
import BudgetItem from './BudgetItem';

interface BudgetEntry {
  id: string;
  tagId: string;
  limit: number;
  spent: number;
  percentage: number;
  status: 'normal' | 'warning' | 'overflow';
}

interface BudgetListProps {
  budgets: BudgetEntry[];
  tags: Tag[];
  onDelete: (id: string) => void;
}

function BudgetList({ budgets, tags, onDelete }: BudgetListProps): JSX.Element {
  if (budgets.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-app-border p-4 text-sm text-app-muted">
        No hay presupuestos configurados. Agrega uno para comenzar a controlar tus gastos por categoria.
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {budgets.map((budget) => (
        <BudgetItem
          key={budget.id}
          tag={tags.find((t) => t.id === budget.tagId)}
          limit={budget.limit}
          spent={budget.spent}
          percentage={budget.percentage}
          status={budget.status}
          onDelete={() => onDelete(budget.id)}
        />
      ))}
    </ul>
  );
}

export default BudgetList;
