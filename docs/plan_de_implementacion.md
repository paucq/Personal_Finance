# Plan de Implementacion

## 1. Enfoque general

El proyecto se implementa por fases de aprendizaje incremental. Cada fase tiene subfases, entregables y criterios de aceptacion.

## 2. Fase 1: Documentacion + Maquetacion (HTML/CSS)

Objetivo: definir completamente el producto y construir interfaz visual sin logica de framework.

Estado global de fase:
- Cerrada.

### Subfases

#### 1.1 Documentacion base

- Crear y completar todos los documentos en `docs/`.
- Definir alcance, stack, arquitectura, sistema de diseno y roadmap.

Entregable:
- Carpeta `docs/` completa y README actualizado.

#### 1.2 Maquetacion de vistas principales

- Vista dashboard.
- Vista de lista de movimientos.
- Vista/formulario de crear/editar movimiento.
- Vista de presupuestos por categoria.

Entregable:
- Prototipo navegable con HTML + Tailwind/CSS.

Estado:
- En progreso.
- Avance actual: prototipo inicial en `index.html` y `styles.css` con vistas clave (dashboard, movimientos y presupuestos).
- Avance adicional: separacion por vistas en `dashboard.html`, `transacciones.html` y `presupuestos.html` con navegacion comun.

#### 1.3 Responsive y estados visuales

- Adaptar mobile y desktop.
- Estados vacios, error visual, placeholders.

Entregable:
- UI consistente y usable en ambos formatos.

Estado:
- Completada.
- Avance final: estados visuales `empty`, `loading`, `error` y confirmacion de eliminacion maquetados en vistas principales.

Criterios de aceptacion Fase 1:
- Documentacion completa.
- Layouts listos para integrar a React.
- Sistema visual consistente.

Resultado del cierre:
- Criterios de aceptacion cumplidos.
- Se habilita inicio formal de Fase 2.

## 3. Fase 2: Integracion con React + TypeScript

Objetivo: convertir maquetacion en aplicacion funcional con estado y logica.

Estado global de fase:
- En progreso.
- Subfase activa: 2.2 Dominio de transacciones.

Guia operativa colaborativa:
- Ver `docs/fase_2_trabajo_en_pareja.md` para orden secuencial de implementacion por persona, contratos y politica de integracion.

### Subfases

#### 2.1 Setup tecnico

- Inicializar Vite + React + TypeScript + Tailwind.
- Configurar estructura de carpetas y tipos base.

Estado:
- Completada.
- Entregado: scaffold React/TS con Vite, Tailwind configurado, React Router base, ESLint, paginas iniciales y tipos de dominio en `src/types/`.

#### 2.2 Dominio de transacciones

- Crear transaccion.
- Editar transaccion.
- Eliminar transaccion.
- Validaciones de formulario.

Estado:
- Completada.
- Avance final (Persona A): componentes UI base, hook `useTransactions` con persistencia localStorage, CRUD completo en `Transactions.tsx`.
- Integracion: `TransactionForm` consume `tagOptions` dinamicos de `useTags`. `TransactionList`/`TransactionItem` muestran nombres de etiqueta.

#### 2.3 Balance y resumen

- Calculo dinamico de ingresos/gastos/saldo.
- Colores segun estado (verde/rojo).
- Resumen mensual en dashboard.

Estado:
- Completada.
- `src/hooks/useBalance.ts` implementado con metricas por etiqueta.
- `src/pages/Home.tsx` conectado a datos reales via `useTransactions` y `useBalance`.

#### 2.4 Etiquetas y presupuestos

- Cargar etiquetas predefinidas.
- Crear etiquetas personalizadas.
- Crear y visualizar presupuestos por categoria.

Estado:
- Completada.
- `src/hooks/useTags.ts` con tags predefinidos + custom, persistencia en localStorage.
- `src/hooks/useBudgets.ts` con calculo de gasto por etiqueta y porcentaje de consumo.
- Componentes `BudgetForm`, `BudgetList`, `BudgetItem` en `src/components/budgets/`.
- `src/pages/Budgets.tsx` integrado con alertas visuales (normal, warning, overflow).

#### 2.5 Graficos

- Integrar Recharts para distribucion de gastos.
- Integrar grafico de tendencia mensual.

Estado:
- Completada.
- `recharts` instalado.
- `ExpenseByTag` (PieChart) y `MonthlyTrend` (BarChart) en `src/components/dashboard/`.
- Integrados en `src/pages/Home.tsx`.

#### 2.6 Persistencia temporal

- Guardar y recuperar datos con localStorage.

Estado:
- Completada.
- `src/services/localStorage.ts` con helpers `getItem`, `setItem`, `removeItem`.
- `src/hooks/useLocalStorage.ts` generico y tipado.
- `useTransactions`, `useTags`, `useBudgets` usan `useLocalStorage` para persistencia.

Criterios de aceptacion Fase 2:
- App funcional completa en frontend.
- Persistencia local activa.
- Flujos CRUD estables.

## 4. Fase 3: Integracion con Firebase (Firestore)

Objetivo: migrar persistencia local a nube para almacenamiento robusto y sincronizacion.

### Subfases

#### 3.1 Configuracion Firebase

- Crear proyecto Firebase.
- Configurar Firestore.
- Agregar variables de entorno.

#### 3.2 Servicios de datos

- Implementar `services/firebase.ts`.
- CRUD de transacciones, etiquetas y presupuestos en Firestore.

#### 3.3 Migracion y pruebas

- Sustituir localStorage por Firestore.
- Probar integridad del flujo completo.

#### 3.4 Hardening

- Definir reglas de seguridad de Firestore.
- Manejo de errores y estados de carga.

Criterios de aceptacion Fase 3:
- Datos persistidos en Firestore.
- App estable con operaciones CRUD completas.
- Documentacion actualizada con decisiones finales.

## 5. Regla de actualizacion documental

Cada subfase cerrada debe actualizar:

1. `README.md` (estado actual y decision tomada)
2. Documento tecnico afectado dentro de `docs/`
3. Registro breve de cambios relevantes en el plan

No se cierra ninguna subfase sin actualizar documentacion.
