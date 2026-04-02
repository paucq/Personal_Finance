import { useState } from 'react';
import type { Tag } from '../../types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';

interface BudgetFormProps {
  availableTags: Tag[];
  onSubmit: (tagId: string, limit: number) => void;
}

function BudgetForm({ availableTags, onSubmit }: BudgetFormProps): JSX.Element {
  const [tagId, setTagId] = useState(availableTags[0]?.id ?? '');
  const [limit, setLimit] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!tagId) {
      setError('Selecciona una etiqueta.');
      return;
    }
    if (limit <= 0) {
      setError('El limite debe ser mayor a cero.');
      return;
    }
    setError('');
    onSubmit(tagId, limit);
    setLimit(0);
  };

  const options = availableTags.map((tag) => ({ value: tag.id, label: tag.name }));

  return (
    <form className="flex flex-wrap items-end gap-3" onSubmit={handleSubmit}>
      <Select
        label="Etiqueta"
        options={options}
        value={tagId}
        onChange={(event) => setTagId(event.target.value)}
      />
      <Input
        label="Limite (COP)"
        type="number"
        value={limit}
        error={error}
        onChange={(event) => setLimit(Number(event.target.value))}
      />
      <Button type="submit">Agregar</Button>
    </form>
  );
}

export default BudgetForm;
