import type { SelectHTMLAttributes } from 'react';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
}

function Select({ label, options, error, className = '', ...props }: SelectProps): JSX.Element {
  return (
    <label className="space-y-1 text-sm">
      <span className="font-medium">{label}</span>
      <select
        className={`w-full rounded-xl border bg-white px-3 py-2.5 text-sm outline-none focus:border-app-primary ${
          error ? 'border-app-negative' : 'border-app-border'
        } ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className="text-xs text-app-negative">{error}</span> : null}
    </label>
  );
}

export default Select;
