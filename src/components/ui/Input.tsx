import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Input({ label, error, className = '', ...props }: InputProps): JSX.Element {
  return (
    <label className="space-y-1 text-sm">
      <span className="font-medium">{label}</span>
      <input
        className={`w-full rounded-xl border px-3 py-2.5 text-sm outline-none focus:border-app-primary ${
          error ? 'border-app-negative' : 'border-app-border'
        } ${className}`}
        {...props}
      />
      {error ? <span className="text-xs text-app-negative">{error}</span> : null}
    </label>
  );
}

export default Input;
