# Fase 2 - Guia de Implementacion en Pareja

## 1. Objetivo del documento

Definir un flujo paso a paso para que dos personas implementen la Fase 2 de forma coordinada, con contexto compartido, bajo acoplamiento y menos conflictos de integracion.

## 2. Roles de trabajo

- Persona A: dominio de transacciones (CRUD, formulario, lista, filtros y componentes UI base).
- Persona B: persistencia local, dashboard/balance, etiquetas, presupuestos y graficos.

## 3. Reglas operativas (obligatorias)

1. No desarrollar fuera del alcance del sprint actual sin actualizar este documento.
2. Cada bloque cerrado debe incluir:
   - build en verde (`npm run build`)
   - lint en verde (`npm run lint`)
   - actualizacion en `README.md` (resumen corto)
   - actualizacion en `docs/plan_de_implementacion.md` (detalle tecnico)
3. Mantener contratos estables (types, hooks, props) antes de integrar features dependientes.
4. Evitar tocar archivos de ownership de la otra persona salvo integraciones pactadas.

## 4. Estado base actual (punto de partida)

- Fase 2.1 completada (setup tecnico).
- Persona A ya inicio 2.2 con:
  - `useTransactions`
  - `TransactionForm`, `TransactionList`, `TransactionFilters`
  - componentes UI base
- Falta conectar persistencia local y alinear con modulos de Persona B.

## 5. Orden consecutivo de implementacion

El orden es secuencial por bloques para que siempre haya contexto y contratos claros.

### Bloque 1 - Contratos compartidos (A + B) [CERRADO]

Objetivo: congelar interfaces y constantes para evitar retrabajos.

Pasos:
1. Revisar y confirmar tipos en `src/types/`.
2. Definir contratos de hooks compartidos:
   - `useTransactions`
   - `useLocalStorage`
   - `useBalance`
   - `useTags`
3. Establecer convenciones de nombres y payloads en formularios.
4. Registrar contratos cerrados en este documento (seccion 8).

Salida esperada:
- Contratos acordados y estables para iniciar trabajo paralelo real.

Estado: Cerrado. Tipos confirmados (`Transaction`, `Tag`, `Budget`), contratos de hooks definidos y storage keys centralizadas en `src/utils/constants.ts`.

---

### Bloque 2 - Persona B habilita infraestructura local [CERRADO]

Dependencia: Bloque 1 cerrado.

Objetivo: entregar base de persistencia para que Persona A conecte CRUD sin friccion.

Pasos Persona B:
1. Implementar `src/services/localStorage.ts`:
   - helpers `getItem`, `setItem`, `removeItem`
   - manejo seguro de JSON
2. Implementar `src/hooks/useLocalStorage.ts` generico y tipado.
3. Definir claves de storage centralizadas en `src/utils/constants.ts`.
4. Exponer API simple para consumir desde `useTransactions`.

Criterio de salida:
- API de persistencia lista y documentada para integracion de Persona A.

Estado: Cerrado. `src/services/localStorage.ts` con helpers `getItem`, `setItem`, `removeItem`. `src/hooks/useLocalStorage.ts` generico y tipado. Storage keys en `src/utils/constants.ts`.

---

### Bloque 3 - Persona A conecta CRUD a persistencia [CERRADO]

Dependencia: Bloque 2 cerrado.

Objetivo: que transacciones no se pierdan al recargar y mantener comportamiento CRUD completo.

Pasos Persona A:
1. Refactor de `src/hooks/useTransactions.ts` para usar `useLocalStorage`.
2. Mantener operaciones:
   - crear
   - editar
   - eliminar
3. Conservar validaciones de formulario y estados visuales.
4. Verificar que `src/pages/Transactions.tsx` no requiera cambios de contrato.

Criterio de salida:
- CRUD funcional persistente en localStorage.

Estado: Cerrado. `useTransactions` refactorizado para usar `useLocalStorage`. Operaciones CRUD conservadas. `Transactions.tsx` actualizado para recibir `tagOptions` dinamicos.

---

### Bloque 4 - Persona B implementa balance y dashboard basico [CERRADO]

Dependencia: Bloque 3 cerrado.

Objetivo: consumir transacciones ya persistidas para calcular metricas globales.

Pasos Persona B:
1. Implementar `src/hooks/useBalance.ts`.
2. Extraer utilidades numericas si aplica (`src/utils/formatters.ts` y helpers).
3. Integrar tarjetas en `src/pages/Home.tsx` usando datos reales.
4. Agregar estados `empty/loading/error` coherentes con Fase 1.

Criterio de salida:
- Dashboard con metricas reales conectadas a transacciones.

Estado: Cerrado. `src/hooks/useBalance.ts` implementado con metricas por etiqueta. `src/pages/Home.tsx` conectado a datos reales via `useTransactions` y `useBalance`.

---

### Bloque 5 - Persona B implementa etiquetas [CERRADO]

Dependencia: Bloque 3 cerrado (ideal junto a Bloque 4).

Objetivo: pasar de etiquetas estaticas a etiquetas gestionables.

Pasos Persona B:
1. Implementar `src/hooks/useTags.ts`.
2. Cargar etiquetas predefinidas + custom.
3. Persistir etiquetas en localStorage.
4. Exponer API para consumo en formularios.

Integracion con Persona A:
5. Persona A reemplaza opciones estaticas de etiqueta en `TransactionForm` por fuente de `useTags`.

Criterio de salida:
- Etiquetas dinamicas integradas en transacciones.

Estado: Cerrado. `src/hooks/useTags.ts` implementado con tags predefinidos + custom, persistencia en localStorage. `TransactionForm` consume `tagOptions` dinamicos. `TransactionList`/`TransactionItem` muestran nombres de etiqueta.

---

### Bloque 6 - Persona B implementa presupuestos [CERRADO]

Dependencia: Bloque 5 cerrado.

Objetivo: construir flujo de presupuestos por categoria y relacionarlo con gastos.

Pasos Persona B:
1. Crear `BudgetForm`, `BudgetList`, `BudgetItem`.
2. Persistir presupuestos en localStorage.
3. Calcular gasto por etiqueta y porcentaje de consumo.
4. Integrar alertas visuales (normal, warning, overflow).
5. Montar todo en `src/pages/Budgets.tsx`.

Criterio de salida:
- Modulo de presupuestos funcional y conectado a transacciones/etiquetas.

Estado: Cerrado. `src/hooks/useBudgets.ts` implementado con calculo de gasto por etiqueta y porcentaje. Componentes `BudgetForm`, `BudgetList`, `BudgetItem` creados en `src/components/budgets/`. `src/pages/Budgets.tsx` integrado.

---

### Bloque 7 - Persona B implementa graficos (Recharts) [CERRADO]

Dependencia: Bloques 4 y 6 cerrados.

Objetivo: cerrar Fase 2 con visualizacion de datos.

Pasos Persona B:
1. Instalar e integrar `recharts`.
2. Crear componentes en `src/components/dashboard/`:
   - grafico por etiqueta
   - tendencia mensual
3. Conectar datos reales de transacciones.
4. Integrar en `src/pages/Home.tsx`.

Criterio de salida:
- Dashboard con graficos funcionales y consistentes con el diseno.

Estado: Cerrado. `recharts` instalado. `ExpenseByTag` (PieChart) y `MonthlyTrend` (BarChart) creados en `src/components/dashboard/`. Integrados en `src/pages/Home.tsx`.

---

### Bloque 8 - Cierre de Fase 2 (A + B)

Objetivo: consolidar entrega y dejar base limpia para Fase 3.

Pasos:
1. QA cruzado:
   - Persona A prueba modulos de B
   - Persona B prueba modulos de A
2. Ejecutar:
   - `npm run lint`
   - `npm run build`
3. Actualizar documentacion final de fase:
   - `README.md`
   - `docs/plan_de_implementacion.md`
   - `docs/arquitectura_del_proyecto.md`
4. Marcar Fase 2 como cerrada y preparar arranque de Firebase (Fase 3).

## 6. Matriz de ownership por carpetas

- Persona A (ownership principal):
  - `src/components/ui/`
  - `src/components/forms/TransactionForm.tsx`
  - `src/components/transactions/`
  - `src/hooks/useTransactions.ts`
  - `src/pages/Transactions.tsx`

- Persona B (ownership principal):
  - `src/services/`
  - `src/hooks/useLocalStorage.ts`
  - `src/hooks/useBalance.ts`
  - `src/hooks/useTags.ts`
  - `src/components/budgets/`
  - `src/components/dashboard/`
  - `src/pages/Home.tsx`
  - `src/pages/Budgets.tsx`

- Compartidos (cambios acordados):
  - `src/types/`
  - `src/utils/constants.ts`
  - `src/utils/formatters.ts`
  - `src/App.tsx`

## 7. Politica de integracion (merge)

1. No mezclar mas de un bloque funcional por PR.
2. Cada PR debe indicar:
   - bloque al que corresponde
   - contratos tocados
   - impacto en otra persona
3. Si un contrato compartido cambia, se debe avisar y actualizar este documento antes del merge.

## 8. Registro de contratos acordados (vivo)

Actualizar esta seccion cuando cambien contratos de hooks/props:

- `useTransactions`: CRUD persistente via `useLocalStorage`. Retorna `transactions`, `addTransaction`, `updateTransaction`, `deleteTransaction`.
- `useLocalStorage<T>`: hook generico. Recibe `key` e `initialValue`. Retorna `[value, setValue]` con persistencia automatica.
- `useBalance(transactions)`: retorna `income`, `expense`, `balance`, `expenseByTag`, `incomeByTag`.
- `useTags`: retorna `tags`, `tagOptions`, `addTag`, `removeTag`, `getTagById`. Persiste en localStorage.
- `useBudgets(transactions)`: retorna `budgets`, `budgetsWithSpent`, `addBudget`, `updateBudget`, `deleteBudget`. Persiste en localStorage.
- `TransactionForm`: recibe `editingTransaction`, `onSubmit`, `onCancelEdit`, `tagOptions`.
- `TransactionList`: recibe `transactions`, `tags`, `onEdit`, `onDelete`.
- `TransactionItem`: recibe `transaction`, `tags`, `onEdit`, `onDelete`.
- Storage keys centralizadas en `STORAGE_KEYS` (`pf_transactions`, `pf_tags`, `pf_budgets`).

## 9. Definition of Done para Fase 2

La fase se considera terminada cuando:

- CRUD de transacciones funciona con persistencia local.
- Balance y dashboard consumen datos reales.
- Etiquetas y presupuestos funcionan de punta a punta.
- Graficos integrados y estables.
- Build y lint en verde.
- Documentacion actualizada y consistente.
