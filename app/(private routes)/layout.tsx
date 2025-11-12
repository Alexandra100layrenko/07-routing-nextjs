//app/(private)/layout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  readonly children: ReactNode;
}

export default function PrivateLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}