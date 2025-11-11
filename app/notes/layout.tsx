// app/notes/layout.tsx
import { ReactNode } from 'react';
import LayoutNotes from '@/components/LayoutNotes/LayoutNotes';

export default function NotesLayout({ children }: { children: ReactNode }) {
  return <LayoutNotes>{children}</LayoutNotes>;
}