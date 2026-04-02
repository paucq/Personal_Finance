import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'bg-app-primary text-white hover:bg-app-primaryStrong',
  secondary: 'border border-app-border bg-app-surface text-app-text hover:border-app-primary hover:text-app-primary',
  danger: 'bg-app-negative text-white hover:opacity-90',
  ghost: 'text-app-text hover:text-app-primary',
};

function Button({ variant = 'primary', className = '', type = 'button', ...props }: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${variantClass[variant]} ${className}`}
      {...props}
    />
  );
}

export default Button;
