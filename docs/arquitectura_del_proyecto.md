# Arquitectura del Proyecto

## 1. Enfoque arquitectonico

Arquitectura frontend modular por dominios funcionales con separacion entre UI, logica de negocio y acceso a datos. El objetivo es facilitar evolucion por fases y mantener claridad documental en DDD.

## 2. Estructura de carpetas (objetivo)

```text
Personal_Finance/
├── docs/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── forms/
│   │   ├── dashboard/
│   │   ├── transactions/
│   │   ├── budgets/
│   │   └── layout/
│   ├── pages/
│   ├── types/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## 3. Dominios funcionales

### 3.1 Transactions

Responsable de crear, editar, eliminar y listar movimientos financieros.

### 3.2 Balance

Responsable del calculo global de ingresos, gastos y saldo.

### 3.3 Tags

Responsable de etiquetas predefinidas y personalizadas.

### 3.4 Budgets

Responsable de limites por categoria y alertas de sobreconsumo.

### 3.5 Dashboard

Responsable de resumen mensual y visualizaciones graficas.

## 4. Modelo de datos

```ts
export type TransactionType = 'income' | 'expense';
export type PaymentMethod = 'cash' | 'card' | 'transfer';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number; // centavos COP
  description: string;
  date: string; // ISO
  paymentMethod: PaymentMethod;
  tagId: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  isCustom: boolean;
}

export interface Budget {
  id: string;
  tagId: string;
  limit: number; // centavos COP
  period: 'monthly';
}
```

## 5. Flujo de datos

1. Usuario interactua con formulario o accion de lista.
2. Componente invoca hook del dominio.
3. Hook aplica validaciones y reglas.
4. Hook delega persistencia al servicio de datos.
5. Estado se actualiza y UI re-renderiza.

## 6. Capa de datos por fase

- Fase 2: `services/localStorage.ts`
- Fase 3: `services/firebase.ts`

Se recomienda definir una interfaz comun de repositorio para desacoplar UI de implementacion de persistencia.

## 7. Convenciones de componentes

- `ui/`: componentes presentacionales reutilizables.
- `forms/`: formularios completos por dominio.
- `pages/`: composicion de secciones por ruta.
- Evitar logica compleja en componentes de presentacion.

## 8. Escalabilidad

- Facil agregar filtros avanzados, exportaciones y nuevas metricas sin romper dominios actuales.
- Estructura lista para incorporar autenticacion en futuro sin rehacer UI principal.
