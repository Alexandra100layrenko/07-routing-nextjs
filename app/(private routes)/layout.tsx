//app/(private)/layout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  readonly children: ReactNode;
}

export default function PublicLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}