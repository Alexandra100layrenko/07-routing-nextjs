//components/SidebarNotes/SidebarNotes.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getNotes } from '@/lib/api';
import { Note } from '@/types/note';
import css from './SidebarNotes.module.css';

export default function SidebarNotes() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function fetchNotes() {
      setNotes(await getNotes());
    }
    fetchNotes();
  }, []);

  return (
    <aside className={css.sidebar}>
      <h3 className={css.title}>All Notes</h3>
      <ul className={css.list}>
        {notes.map((note) => (
          <li key={note.id} className={css.item}>
            <Link href={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}