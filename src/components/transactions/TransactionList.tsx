import type { Transaction } from '../../types';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (transaction: Transaction) => void;
}

function TransactionList({ transactions, onEdit, onDelete }: TransactionListProps): JSX.Element {
  if (transactions.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-app-border p-4 text-sm text-app-muted">
        No hay transacciones para el filtro seleccionado.
      </div>
    );
  }

  return (
    <ul className="mt-4 space-y-3">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TransactionList;
