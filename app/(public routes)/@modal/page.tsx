//app/(public)/page.tsx
import Home from '@/components/Home/Home';
import NoteList from '@/components/NoteList/NoteList';
import { getNotes } from '@/lib/api';
import css from '@/components/Home/Home.module.css';
import Link from 'next/link';

export default async function PublicHome() {
  const notes = await getNotes();

  return (
    <section className={css.homeSection}>
      <Home />

      {notes.length > 0 ? (
        <NoteList notes={notes} />
      ) : (
        <p className={css.empty}>No notes yet. Create your first note!</p>
      )}

      <Link href="/notes/form" className={css.createBtn}>
        Create Note
      </Link>
    </section>
  );
}