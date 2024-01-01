import { ReactNode } from 'react';

function Tag({ children }: { children: ReactNode }) {
  const style = {
    display: 'inline-block',
    backgroundColor: 'hsl(var(--clr-yellow))',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: 'clamp(0.75rem, 0.706rem + 0.1878vw, 0.875rem)',
    lineHeight: 'normal',
  };

  return <li style={style}>{children}</li>;
}

export default Tag;
