//components/NotesPage/NotesPage.tsx
import css from './NotesPage.module.css';
import NotesClient from '../../app/notes/Notes.client';

export default function NotesPage({ searchParams }: { searchParams?: { tag?: string } }) {
  return (
    <div className={css.app}>
      <div className={css.toolbar}>
        <h1>Notes</h1>
        <button className={css.button}>New Note</button>
      </div>
      <NotesClient initialTag={searchParams?.tag ?? null} />
    </div>
  );
}
