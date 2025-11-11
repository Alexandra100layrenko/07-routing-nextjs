//app/notes/filter/layout.tsx
import SidebarNotes from '../../../components/SidebarNotes/SidebarNotes';
import css from './layout.module.css';

export default function LayoutNotesFilter({ children }: { children: React.ReactNode }) {
  return (
    <div className={css.layout}>
      <SidebarNotes />
      <div className={css.content}>{children}</div>
    </div>
  );
}
