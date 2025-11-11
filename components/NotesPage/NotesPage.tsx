//components/NotesPage/NotesPage.tsx
import css from './NotesPage.module.css';
import NotesClient from '../../app/notes/Notes.client';
import { getNotes } from '@/lib/api';

export default async function NotesPage({ searchParams }: { searchParams?: { tag?: string } }) {
  const notes = await getNotes(); 
  const tag = searchParams?.tag ?? null;

  return (
    <div className={css.app}>
      <div className={css.toolbar}>
        <h1>Notes</h1>
        <button className={css.button}>New Note</button>
      </div>

      <NotesClient initialNotes={notes} initialTag={tag} />
    </div>
  );
}