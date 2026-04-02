import type { Tag, Transaction } from '../../types';
import { formatCurrency, formatDate } from '../../utils/formatters';
import Button from '../ui/Button';

interface TransactionItemProps {
  transaction: Transaction;
  tags: Tag[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (transaction: Transaction) => void;
}

function TransactionItem({ transaction, tags, onEdit, onDelete }: TransactionItemProps): JSX.Element {
  const amountClass = transaction.type === 'income' ? 'text-app-info' : 'text-app-negative';
  const amountPrefix = transaction.type === 'income' ? '+' : '-';
  const tag = tags.find((t) => t.id === transaction.tagId);
  const tagName = tag?.name ?? transaction.tagId;

  return (
    <li className="flex items-start justify-between gap-4 rounded-xl border border-app-border p-3">
      <div>
        <p className="font-medium">{transaction.description}</p>
        <p className="mt-1 text-xs text-app-muted">
          {formatDate(transaction.date)} - {transaction.paymentMethod} - {tagName}
        </p>
      </div>
      <div className="text-right">
        <p className={`font-mono font-semibold ${amountClass}`}>
          {amountPrefix} {formatCurrency(transaction.amount)}
        </p>
        <div className="mt-2 flex justify-end gap-2">
          <Button variant="secondary" className="px-2 py-1 text-xs" onClick={() => onEdit(transaction)}>
            Editar
          </Button>
          <Button variant="danger" className="px-2 py-1 text-xs" onClick={() => onDelete(transaction)}>
            Eliminar
          </Button>
        </div>
      </div>
    </li>
  );
}

export default TransactionItem;
