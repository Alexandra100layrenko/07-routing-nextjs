//app/notes/filter/layout.tsx
import SidebarNotes from '../../../components/SidebarNotes/SidebarNotes';
import { ReactNode } from 'react';
import css from './layout.module.css';

interface NotesFilterProps {
  readonly children: ReactNode;
}

export default function LayoutNotesFilter({ children }: NotesFilterProps) {

  return (
    <div className={css.layout}>
      <SidebarNotes />
      <div className={css.content}>{children}</div>
    </div>
  );
}

