interface TagProps {
  children: string;
}

function Tag({ children }: TagProps): JSX.Element {
  return <span className="rounded-full bg-app-primary/10 px-3 py-1 text-xs font-semibold text-app-primary">{children}</span>;
}

export default Tag;
