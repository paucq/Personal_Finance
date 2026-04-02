import BudgetForm from '../components/budgets/BudgetForm';
import BudgetList from '../components/budgets/BudgetList';
import useBudgets from '../hooks/useBudgets';
import useTags from '../hooks/useTags';
import useTransactions from '../hooks/useTransactions';

function Budgets(): JSX.Element {
  const { transactions } = useTransactions();
  const { tags } = useTags();
  const { budgets, budgetsWithSpent, addBudget, deleteBudget } = useBudgets(transactions);

  const usedTagIds = budgets.map((b) => b.tagId);
  const availableTags = tags.filter((t) => !usedTagIds.includes(t.id));

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8">
      <section className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card md:p-6">
        <h2 className="text-lg font-semibold md:text-xl">Presupuestos</h2>
        <p className="mt-1 text-sm text-app-muted">Define limites de gasto por categoria y monitorea tu consumo.</p>
        <div className="mt-5">
          <BudgetForm availableTags={availableTags} onSubmit={addBudget} />
        </div>
      </section>

      <section className="mt-6">
        <BudgetList budgets={budgetsWithSpent} tags={tags} onDelete={deleteBudget} />
      </section>
    </main>
  );
}

export default Budgets;
