import { useEffect, useMemo, useState } from 'react';
import type { Transaction, TransactionFormValues } from '../../types';
import { paymentMethodOptions, transactionTypeOptions } from '../../utils/constants';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';

interface SelectOption {
  value: string;
  label: string;
}

interface TransactionFormProps {
  editingTransaction: Transaction | null;
  onSubmit: (values: TransactionFormValues) => void;
  onCancelEdit: () => void;
  tagOptions: SelectOption[];
}

const createInitialValues = (firstTagId: string): TransactionFormValues => ({
  type: 'expense',
  amount: 0,
  description: '',
  date: new Date().toISOString().slice(0, 10),
  paymentMethod: 'cash',
  tagId: firstTagId,
});

function TransactionForm({ editingTransaction, onSubmit, onCancelEdit, tagOptions }: TransactionFormProps): JSX.Element {
  const firstTagId = tagOptions[0]?.value ?? '';
  const initialValues = useMemo(() => createInitialValues(firstTagId), [firstTagId]);

  const [values, setValues] = useState<TransactionFormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (editingTransaction) {
      setValues({
        type: editingTransaction.type,
        amount: editingTransaction.amount,
        description: editingTransaction.description,
        date: editingTransaction.date,
        paymentMethod: editingTransaction.paymentMethod,
        tagId: editingTransaction.tagId,
      });
      return;
    }

    setValues(initialValues);
  }, [editingTransaction, initialValues]);

  const title = useMemo(() => (editingTransaction ? 'Editar Movimiento' : 'Agregar Movimiento'), [editingTransaction]);

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {};

    if (values.amount <= 0) {
      nextErrors.amount = 'El monto debe ser mayor a cero.';
    }
    if (!values.description.trim()) {
      nextErrors.description = 'La descripcion es obligatoria.';
    }
    if (!values.date) {
      nextErrors.date = 'La fecha es obligatoria.';
    }
    if (!values.tagId) {
      nextErrors.tagId = 'Debes seleccionar una etiqueta.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    onSubmit(values);
    if (!editingTransaction) {
      setValues(initialValues);
    }
  };

  return (
    <article className="rounded-2xl border border-app-border bg-app-surface p-5 shadow-card md:p-6">
      <h2 className="text-lg font-semibold md:text-xl">{title}</h2>
      <p className="mt-1 text-sm text-app-muted">Formulario para crear y editar movimientos.</p>

      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        {tagOptions.length === 0 ? (
          <div className="rounded-xl border border-dashed border-app-border p-3 text-sm text-app-muted">
            No hay etiquetas disponibles. Crea una etiqueta desde el modulo de etiquetas para continuar.
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          <Select
            label="Tipo"
            options={transactionTypeOptions}
            value={values.type}
            onChange={(event) => setValues((prev) => ({ ...prev, type: event.target.value as TransactionFormValues['type'] }))}
          />
          <Input
            label="Monto (COP)"
            type="number"
            value={values.amount}
            error={errors.amount}
            onChange={(event) => setValues((prev) => ({ ...prev, amount: Number(event.target.value) }))}
          />
        </div>

        <Input
          label="Descripcion"
          type="text"
          placeholder="Ej. Mercado semanal"
          value={values.description}
          error={errors.description}
          onChange={(event) => setValues((prev) => ({ ...prev, description: event.target.value }))}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="Fecha"
            type="date"
            value={values.date}
            error={errors.date}
            onChange={(event) => setValues((prev) => ({ ...prev, date: event.target.value }))}
          />
          <Select
            label="Metodo de pago"
            options={paymentMethodOptions}
            value={values.paymentMethod}
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                paymentMethod: event.target.value as TransactionFormValues['paymentMethod'],
              }))
            }
          />
        </div>

        <Select
          label="Etiqueta"
          options={tagOptions}
          value={values.tagId}
          error={errors.tagId}
          onChange={(event) => setValues((prev) => ({ ...prev, tagId: event.target.value }))}
        />

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button type="submit" disabled={tagOptions.length === 0}>
            {editingTransaction ? 'Actualizar Movimiento' : 'Guardar Movimiento'}
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              setValues(initialValues);
              setErrors({});
              onCancelEdit();
            }}
          >
            {editingTransaction ? 'Cancelar edicion' : 'Limpiar'}
          </Button>
        </div>
      </form>
    </article>
  );
}

export type { TransactionFormValues };
export default TransactionForm;
