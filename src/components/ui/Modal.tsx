import type { ReactNode } from 'react';

interface ModalProps {
  title: string;
  description: string;
  open: boolean;
  children: ReactNode;
}

function Modal({ title, description, open, children }: ModalProps): JSX.Element | null {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/35 p-4">
      <div className="w-full max-w-md rounded-2xl border border-app-border bg-app-surface p-5 shadow-pop md:p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-app-muted">{description}</p>
        <div className="mt-5 flex flex-wrap gap-3">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
