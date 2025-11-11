// components/LayoutNotes/LayoutNotes.tsx
import { ReactNode } from 'react';
import css from './LayoutNotes.module.css';
import SidebarNotes from '../SidebarNotes/SidebarNotes';

interface LayoutNotesProps {
  readonly children: ReactNode;
}

export default function LayoutNotes({ children }: LayoutNotesProps) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>
      <main className={css.notesWrapper}>{children}</main>
    </div>
  );
}
