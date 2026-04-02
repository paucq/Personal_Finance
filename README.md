# Personal Finance App

Aplicacion web para control de finanzas personales enfocada en registrar ingresos/gastos, visualizar saldo total, gestionar etiquetas y controlar presupuestos por categoria.

## Estado del Proyecto

- Fase actual: **Fase 2 - Integracion con React + TypeScript**
- Estado de Fase 1: **Cerrada**
- Subfase activa: **Bloque 8 - Cierre de Fase 2 (QA cruzado pendiente)**
- Estado de subfases 2.1 a 2.6: **Completadas**

## Stack Tecnologico

- React
- TypeScript
- Firebase Firestore
- Tailwind CSS + CSS
- Recharts (fase de graficos)

## Decisiones Clave (resumen)

- Se trabaja sin autenticacion en el alcance actual.
- Moneda unica del sistema: COP.
- Etiquetas mixtas: predefinidas + personalizables.
- App responsive para mobile y desktop.
- Presupuestos por categoria y dashboard mensual incluidos en alcance.
- Progreso por fases de aprendizaje: documentacion/maquetacion -> React+TS -> Firebase.
- Maquetacion inicial creada en `index.html` + `styles.css` con dashboard, formulario de movimientos, lista de transacciones y panel de presupuestos.
- Maquetacion separada por vistas en `dashboard.html`, `transacciones.html` y `presupuestos.html` con navegacion compartida para facilitar migracion a React.
- Estados visuales implementados en maquetacion: `empty`, `loading`, `error` y `confirmacion de eliminacion`.
- Cierre de Fase 1 aprobado: documentacion completa, maquetacion responsive y estados UX listos para portar a React.
- Setup tecnico 2.1 implementado con Vite + React + TypeScript + Tailwind + React Router + ESLint.
- Estructura base de `src/` creada con paginas iniciales y tipos de dominio (`Transaction`, `Tag`, `Budget`).
- Implementacion Persona A iniciada: componentes UI base, `useTransactions` y flujo CRUD visual en `src/pages/Transactions.tsx`.
- Implementacion Persona B completada:
  - Persistencia local: `src/services/localStorage.ts` + `src/hooks/useLocalStorage.ts`.
  - Dashboard: `useBalance` con metricas reales, `Home.tsx` conectado.
  - Etiquetas: `useTags` con tags predefinidos + custom, persistencia localStorage.
  - Presupuestos: `useBudgets` + componentes `BudgetForm`, `BudgetList`, `BudgetItem` en `src/components/budgets/`.
  - Graficos: `recharts` con `ExpenseByTag` (PieChart) y `MonthlyTrend` (BarChart) en `src/components/dashboard/`.
- Integracion cruzada: `TransactionForm` consume `tagOptions` dinamicos, `TransactionList` muestra nombres de etiqueta.

## Arranque rapido

- Instalar dependencias: `npm install`
- Desarrollo local: `npm run dev`
- Build de produccion: `npm run build`
- Lint: `npm run lint`

## Cierre de Fase 1 (Checklist)

- Documentacion base completada en `docs/`.
- Maquetacion principal separada por vistas (`dashboard.html`, `transacciones.html`, `presupuestos.html`).
- Navegacion y estilos compartidos consolidados en `styles.css`.
- Estados visuales de UX listos: `empty`, `loading`, `error`, `confirm`.
- Mapeo documentado de vistas HTML a componentes React.

Ver detalle de decisiones en:
- `docs/alcance_del_proyecto.md`
- `docs/tech_stack.md`
- `docs/arquitectura_del_proyecto.md`
- `docs/plan_de_implementacion.md`
- `docs/sistema_de_diseño.md`
- `docs/fase_2_trabajo_en_pareja.md`

## Regla Documental del Proyecto (obligatoria)

Toda decision funcional o tecnica debe quedar documentada y reflejada de forma resumida en este `README.md`, enlazando el documento especifico en `docs/`.

Checklist minimo por actualizacion:

1. Actualizar estado de fase/subfase en README.
2. Registrar decision resumida en README.
3. Actualizar documento detallado correspondiente en `docs/`.
4. Verificar consistencia entre README y documentos tecnicos.

## Estructura de Documentacion

```text
docs/
├── alcance_del_proyecto.md
├── sistema_de_diseño.md
├── tech_stack.md
├── arquitectura_del_proyecto.md
└── plan_de_implementacion.md
```
