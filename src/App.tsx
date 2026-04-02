import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';

function App(): JSX.Element {
  return (
    <div className="app-bg min-h-screen bg-app-bg text-app-text">
      <header className="border-b border-app-border/70 bg-app-surface/90 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-app-muted">Personal Finance</p>
              <h1 className="text-xl font-semibold md:text-2xl">Control de Finanzas Personales</h1>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`} end>
                Dashboard
              </NavLink>
              <NavLink to="/transacciones" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
                Transacciones
              </NavLink>
              <NavLink to="/presupuestos" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
                Presupuestos
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transacciones" element={<Transactions />} />
        <Route path="/presupuestos" element={<Budgets />} />
      </Routes>
    </div>
  );
}

export default App;
