import type { Tag } from '../../types';
import { formatCurrency } from '../../utils/formatters';
import Button from '../ui/Button';

interface BudgetItemProps {
  tag: Tag | undefined;
  limit: number;
  spent: number;
  percentage: number;
  status: 'normal' | 'warning' | 'overflow';
  onDelete: () => void;
}

const statusColors: Record<string, string> = {
  normal: 'bg-app-positive',
  warning: 'bg-yellow-500',
  overflow: 'bg-app-negative',
};

const statusText: Record<string, string> = {
  normal: 'Dentro del presupuesto',
  warning: 'Cerca del limite',
  overflow: 'Presupuesto excedido',
};

function BudgetItem({ tag, limit, spent, percentage, status, onDelete }: BudgetItemProps): JSX.Element {
  const barColor = statusColors[status];
  const label = tag?.name ?? 'Sin etiqueta';

  return (
    <li className="rounded-xl border border-app-border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {tag && (
            <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: tag.color }} />
          )}
          <p className="font-medium">{label}</p>
        </div>
        <Button variant="ghost" className="px-2 py-1 text-xs" onClick={onDelete}>
          Eliminar
        </Button>
      </div>

      <div className="mt-3">
        <div className="flex justify-between text-xs text-app-muted">
          <span>{formatCurrency(spent)} gastado</span>
          <span>{formatCurrency(limit)} limite</span>
        </div>
        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-app-border/50">
          <div
            className={`h-full rounded-full transition-all ${barColor}`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
        <p className={`mt-1 text-xs ${status === 'overflow' ? 'text-app-negative' : status === 'warning' ? 'text-yellow-600' : 'text-app-muted'}`}>
          {percentage}% - {statusText[status]}
        </p>
      </div>
    </li>
  );
}

export default BudgetItem;
