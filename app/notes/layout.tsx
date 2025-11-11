// app/notes/layout.tsx
import { ReactNode } from 'react';
import LayoutNotes from '@/components/LayoutNotes/LayoutNotes';

interface NotesLayoutProps {
  readonly children: ReactNode;
}

export default function NotesLayout({ children }: NotesLayoutProps) {
  return <LayoutNotes>{children}</LayoutNotes>;
}