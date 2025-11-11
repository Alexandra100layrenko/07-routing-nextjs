// app/notes/Notes.client.tsx
'use client';

import { useState, useEffect } from 'react';
import { getNotes } from '@/lib/api';
import { Note } from '@/types/note';
import NoteList from '@/components/NoteList/NoteList';

interface NotesClientProps {
  readonly initialTag?: string | null;
}

export default function NotesClient({ initialTag }: NotesClientProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const tag = initialTag ?? null; // 🔹 setTag не нужен, потому что ты не меняешь тег здесь

  useEffect(() => {
    async function fetchNotes() {
      const allNotes = await getNotes();
      setNotes(tag ? allNotes.filter((n) => n.tag === tag) : allNotes);
    }
    fetchNotes();
  }, [tag]); // 🔹 зависимости useEffect обновлены корректно

  return <NoteList notes={notes} />;
}