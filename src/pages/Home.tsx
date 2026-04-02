import useBalance from '../hooks/useBalance';
import useTags from '../hooks/useTags';
import useTransactions from '../hooks/useTransactions';
import ExpenseByTag from '../components/dashboard/ExpenseByTag';
import MonthlyTrend from '../components/dashboard/MonthlyTrend';
import { formatCurrency } from '../utils/formatters';

function Home(): JSX.Element {
  const { transactions } = useTransactions();
  const { income, expense, balance, expenseByTag } = useBalance(transactions);
  const { tags } = useTags();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8">
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card">
          <p className="text-sm text-app-muted">Saldo Total</p>
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

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card md:p-6">
          <h2 className="text-lg font-semibold md:text-xl">Distribucion de Gastos</h2>
          <p className="mt-1 text-sm text-app-muted">Gastos agrupados por etiqueta.</p>
          <div className="mt-4">
            <ExpenseByTag expenseByTag={expenseByTag} tags={tags} />
          </div>
        </article>

        <article className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card md:p-6">
          <h2 className="text-lg font-semibold md:text-xl">Tendencia Mensual</h2>
          <p className="mt-1 text-sm text-app-muted">Ingresos vs gastos por mes.</p>
          <div className="mt-4">
            <MonthlyTrend transactions={transactions} />
          </div>
        </article>
      </section>
    </main>
  );
}

export default Home;
