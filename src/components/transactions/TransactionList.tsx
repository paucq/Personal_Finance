import type { Tag, Transaction } from '../../types';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
  tags: Tag[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (transaction: Transaction) => void;
}

function TransactionList({ transactions, tags, onEdit, onDelete }: TransactionListProps): JSX.Element {
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
        <TransactionItem key={transaction.id} transaction={transaction} tags={tags} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TransactionList;
