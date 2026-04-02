import type { TransactionType } from '../../types';
import Tag from '../ui/Tag';

type FilterValue = 'all' | TransactionType;

interface TransactionFiltersProps {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
}

function TransactionFilters({ value, onChange }: TransactionFiltersProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={() => onChange('all')} className="rounded-full" type="button">
        <Tag>{value === 'all' ? 'Todos (activo)' : 'Todos'}</Tag>
      </button>
      <button onClick={() => onChange('income')} className="rounded-full" type="button">
        <Tag>{value === 'income' ? 'Ingreso (activo)' : 'Ingreso'}</Tag>
      </button>
      <button onClick={() => onChange('expense')} className="rounded-full" type="button">
        <Tag>{value === 'expense' ? 'Gasto (activo)' : 'Gasto'}</Tag>
      </button>
    </div>
  );
}

export type { FilterValue };
export default TransactionFilters;
