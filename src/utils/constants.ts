export const transactionTypeOptions = [
  { value: 'income', label: 'Ingreso' },
  { value: 'expense', label: 'Gasto' },
];

export const paymentMethodOptions = [
  { value: 'cash', label: 'Efectivo' },
  { value: 'card', label: 'Tarjeta' },
  { value: 'transfer', label: 'Transferencia' },
];

export const transactionFilterOptions = [
  { value: 'all', label: 'Todos' },
  { value: 'income', label: 'Ingreso' },
  { value: 'expense', label: 'Gasto' },
];

export const tagOptions = [
  { value: 'alimentacion', label: 'Alimentacion' },
  { value: 'transporte', label: 'Transporte' },
  { value: 'vivienda', label: 'Vivienda' },
  { value: 'salud', label: 'Salud' },
  { value: 'trabajo', label: 'Trabajo' },
];

export const defaultTags = [
  { id: 'alimentacion', name: 'Alimentacion', color: '#f59e0b', isCustom: false },
  { id: 'transporte', name: 'Transporte', color: '#3b82f6', isCustom: false },
  { id: 'vivienda', name: 'Vivienda', color: '#10b981', isCustom: false },
  { id: 'salud', name: 'Salud', color: '#ef4444', isCustom: false },
  { id: 'trabajo', name: 'Trabajo', color: '#8b5cf6', isCustom: false },
  { id: 'entretenimiento', name: 'Entretenimiento', color: '#ec4899', isCustom: false },
  { id: 'educacion', name: 'Educacion', color: '#06b6d4', isCustom: false },
  { id: 'otros', name: 'Otros', color: '#6b7280', isCustom: false },
];

export const STORAGE_KEYS = {
  TRANSACTIONS: 'pf_transactions',
  TAGS: 'pf_tags',
  BUDGETS: 'pf_budgets',
} as const;
