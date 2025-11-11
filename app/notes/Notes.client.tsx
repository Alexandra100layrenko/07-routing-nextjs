// app/notes/Notes.client.tsx
'use client';

import { useMemo } from 'react';
import { Note } from '@/types/note';
import NoteList from '@/components/NoteList/NoteList';

interface NotesClientProps {
  readonly initialNotes: Note[];
  readonly initialTag?: string | null;
}

export default function NotesClient({ initialNotes, initialTag }: NotesClientProps) {
  const tag = initialTag ?? null;

  const notes = useMemo(
    () => (tag ? initialNotes.filter((n) => n.tag === tag) : initialNotes),
    [initialNotes, tag]
  );

  return <NoteList notes={notes} />;
}