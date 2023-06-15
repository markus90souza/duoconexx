import { ReactNode } from 'react';

interface CtaProps {
  children: ReactNode;
}

export function Cta({ children }: CtaProps) {
  return (
    <>
      <h1>Cta</h1>
      {children}
    </>
  );
}
