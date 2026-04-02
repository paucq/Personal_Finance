function Home(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8">
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card">
          <p className="text-sm text-app-muted">Saldo Total</p>
          <p className="mt-3 font-mono text-3xl font-bold text-app-positive">$ 1.950.000</p>
          <p className="mt-2 text-xs text-app-muted">Base de layout migrada desde maqueta</p>
        </article>
        <article className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card">
          <p className="text-sm text-app-muted">Ingresos (Mes)</p>
          <p className="mt-3 font-mono text-3xl font-bold text-app-info">$ 4.500.000</p>
        </article>
        <article className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card">
          <p className="text-sm text-app-muted">Gastos (Mes)</p>
          <p className="mt-3 font-mono text-3xl font-bold text-app-negative">$ 2.550.000</p>
        </article>
      </section>
    </main>
  );
}

export default Home;
