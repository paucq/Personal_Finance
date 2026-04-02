import { useMemo, useState } from 'react';
import TransactionForm, { type TransactionFormValues } from '../components/forms/TransactionForm';
import TransactionFilters, { type FilterValue } from '../components/transactions/TransactionFilters';
import TransactionList from '../components/transactions/TransactionList';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import useBalance from '../hooks/useBalance';
import useTags from '../hooks/useTags';
import useTransactions from '../hooks/useTransactions';
import type { Transaction } from '../types';
import { formatCurrency } from '../utils/formatters';

function Transactions(): JSX.Element {
  const { transactions, addTransaction, updateTransaction, deleteTransaction } = useTransactions();
  const { income, expense, balance } = useBalance(transactions);
  const { tags, tagOptions } = useTags();
  const [filter, setFilter] = useState<FilterValue>('all');
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [deletingTransaction, setDeletingTransaction] = useState<Transaction | null>(null);

  const filteredTransactions = useMemo(() => {
    if (filter === 'all') {
      return transactions;
    }
    return transactions.filter((item) => item.type === filter);
  }, [filter, transactions]);

  const handleSubmit = (values: TransactionFormValues) => {
    if (editingTransaction) {
      updateTransaction(editingTransaction.id, values);
      setEditingTransaction(null);
      return;
    }

    addTransaction(values);
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8">
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card">
          <p className="text-sm text-app-muted">Saldo</p>
          <p className={`mt-3 font-mono text-3xl font-bold ${balance >= 0 ? 'text-app-positive' : 'text-app-negative'}`}>
            {formatCurrency(balance)}
          </p>
        </article>
        <article className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card">
          <p className="text-sm text-app-muted">Ingresos</p>
          <p className="mt-3 font-mono text-3xl font-bold text-app-info">{formatCurrency(income)}</p>
        </article>
        <article className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card">
          <p className="text-sm text-app-muted">Gastos</p>
          <p className="mt-3 font-mono text-3xl font-bold text-app-negative">{formatCurrency(expense)}</p>
        </article>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <TransactionForm
          editingTransaction={editingTransaction}
          onSubmit={handleSubmit}
          onCancelEdit={() => setEditingTransaction(null)}
          tagOptions={tagOptions}
        />

        <article className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold md:text-xl">Movimientos Recientes</h2>
            <TransactionFilters value={filter} onChange={setFilter} />
          </div>

          <TransactionList
            transactions={filteredTransactions}
            tags={tags}
            onEdit={(transaction) => setEditingTransaction(transaction)}
            onDelete={(transaction) => setDeletingTransaction(transaction)}
          />
        </article>
      </section>

      <Modal
        open={Boolean(deletingTransaction)}
        title="Eliminar movimiento"
        description="Esta accion no se puede deshacer. El movimiento saldra del saldo total y del historial."
      >
        <Button variant="secondary" onClick={() => setDeletingTransaction(null)}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            if (deletingTransaction) {
              deleteTransaction(deletingTransaction.id);
              setDeletingTransaction(null);
            }
          }}
        >
          Si, eliminar
        </Button>
      </Modal>
    </main>
  );
}

export default Transactions;
