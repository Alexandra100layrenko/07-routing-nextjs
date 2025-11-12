//components/NotesPage/NotesPage.tsx
import NoteList from '../NoteList/NoteList';
import SidebarNotes from '../SidebarNotes/SidebarNotes';
import css from './NotesPage.module.css';

type Note = {
  id: string;
  title: string;
  content: string;
  tag?: string;
  createdAt: string;
};

type Props = {
  notes: Note[];
};

const NotesPage = ({ notes }: Props) => {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>
      <main className={css.main}>
        {notes.length > 0 ? (
          <NoteList notes={notes} />
        ) : (
          <p className={css.empty}>No notes found</p>
        )}
      </main>
    </div>
  );
};

export default NotesPage;
