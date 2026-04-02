# Sistema de Diseno

## 1. Principios de diseno

- Claridad: la informacion financiera debe entenderse de un vistazo.
- Consistencia: componentes y patrones repetibles en toda la aplicacion.
- Jerarquia visual: destacar saldo, alertas de presupuesto y acciones primarias.
- Accesibilidad: buen contraste, estados de foco visibles y textos legibles.
- Responsividad: experiencia equivalente en mobile y desktop.

## 2. Identidad visual

### 2.1 Colores (tokens)

- `--color-bg`: `#F4F7F5`
- `--color-surface`: `#FFFFFF`
- `--color-text`: `#1D2A24`
- `--color-muted`: `#5D6E66`
- `--color-border`: `#D7E0DB`
- `--color-primary`: `#1E7A4D`
- `--color-primary-strong`: `#155F3B`
- `--color-positive`: `#2E9D5B`
- `--color-negative`: `#C63D2F`
- `--color-warning`: `#D08700`
- `--color-info`: `#2B6CB0`

Reglas:
- saldo positivo o cero: `--color-positive`
- saldo negativo: `--color-negative`
- alertas de presupuesto cercano al limite: `--color-warning`

### 2.2 Tipografia

- Fuente principal: `Poppins`, sans-serif.
- Fuente secundaria (datos numericos): `Roboto Mono`, monospace.

Escala sugerida:
- `text-xs`: 12px
- `text-sm`: 14px
- `text-base`: 16px
- `text-lg`: 18px
- `text-xl`: 20px
- `text-2xl`: 24px
- `text-3xl`: 30px

### 2.3 Espaciado

Base de 4px.

- 1 = 4px
- 2 = 8px
- 3 = 12px
- 4 = 16px
- 5 = 20px
- 6 = 24px
- 8 = 32px
- 10 = 40px
- 12 = 48px

### 2.4 Bordes y sombras

- Radio base: 12px
- Radio grande: 16px
- Sombra tarjeta: `0 6px 20px rgba(17, 34, 25, 0.08)`
- Sombra modal: `0 18px 40px rgba(17, 34, 25, 0.16)`

## 3. Componentes base

### 3.1 Botones

- Primario: acciones principales (guardar, confirmar).
- Secundario: acciones de soporte.
- Peligro: eliminar.
- Ghost: acciones de bajo enfasis.

Estados:
- default
- hover
- active
- disabled
- focus-visible

### 3.2 Inputs

- Input texto
- Input numerico
- Select (tipo, metodo de pago, etiqueta)
- Date picker

Reglas:
- label siempre visible
- mensaje de error debajo del campo
- estado invalido con borde rojo y texto de ayuda

### 3.3 Tarjetas

- BalanceCard
- SummaryCard
- BudgetCard
- TransactionCard

### 3.4 Etiquetas (chips)

- Colores distintivos por categoria.
- Texto corto y alto contraste.

### 3.5 Modal

- Confirmacion de eliminacion.
- Formularios rapidos de creacion/edicion.

## 4. Layout y responsive

Breakpoints:
- mobile: 320px - 767px
- tablet: 768px - 1023px
- desktop: 1024px+

Estrategia:
- Grid principal adaptable.
- En mobile: navegacion simplificada, tarjetas en columna, tablas convertidas a lista.
- En desktop: multiples columnas para dashboard y panel de transacciones.

## 5. Interacciones y estados UX

- Feedback inmediato al crear/editar/eliminar.
- Confirmacion en acciones destructivas.
- Empty states con mensaje claro y CTA.
- Loading states (skeletons/spinners) en operaciones asincronas.
- Error states con tono visual de alerta y accion de reintento.

Estados maquetados en fase 1.3:

- `empty`: ausencia de datos para una vista o filtro.
- `loading`: carga de resumen, lista o presupuestos.
- `error`: fallo de carga o guardado.
- `confirm`: modal de confirmacion para eliminar movimiento.

## 6. Accesibilidad

- Contraste minimo AA.
- Navegacion por teclado completa.
- `aria-label` en acciones iconicas.
- Objetivos tactiles minimos de 44x44px.

## 7. Convenciones para Tailwind

- Centralizar tokens en `tailwind.config.js`.
- Evitar valores arbitrarios repetidos.
- Usar clases utilitarias y extraer componentes cuando haya repeticion.
- Mantener consistencia en paddings, margins y tipografias definidas por el sistema.

## 8. Mapeo de maquetacion a componentes React

Referencia de vistas HTML de fase 1.2:

- `dashboard.html`
- `transacciones.html`
- `presupuestos.html`

Mapeo recomendado:

- `Header + nav` -> `components/layout/Header.tsx`
- `Tarjetas de saldo/metricas` -> `components/dashboard/BalanceCard.tsx` y `components/dashboard/SummaryCard.tsx`
- `Bloques de graficos placeholder` -> `components/dashboard/ChartCard.tsx`
- `Formulario de movimiento` -> `components/forms/TransactionForm.tsx`
- `Lista de movimientos` -> `components/transactions/TransactionList.tsx` y `components/transactions/TransactionItem.tsx`
- `Chips de filtros (Todos/Ingreso/Gasto)` -> `components/transactions/TransactionFilters.tsx`
- `Tarjetas y barras de presupuesto` -> `components/budgets/BudgetList.tsx` y `components/budgets/BudgetItem.tsx`
- `Formulario de presupuesto` -> `components/forms/BudgetForm.tsx`

Regla de migracion:

- La maquetacion HTML/CSS es fuente visual inicial.
- En fase React se replica primero la estructura y luego se integra estado/logica.
