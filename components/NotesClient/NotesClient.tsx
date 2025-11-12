// components/NotesClient/NotesClient.tsx
'use client';

import { useState, useEffect } from 'react';
import { Note } from '@/types/note';
import NotePreview from '@/components/NotePreview/NotePreview';
import { getNotes } from '@/lib/api';
import SidebarNotes from '@/components/SidebarNotes/SidebarNotes';
import { useRouter } from 'next/navigation';

interface NotesClientProps {
  readonly initialNotes: Note[];
  readonly initialTag: string | null;
}

export default function NotesClient({ initialNotes, initialTag }: NotesClientProps) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [activeTag, setActiveTag] = useState<string | null>(initialTag);

  const router = useRouter();

  useEffect(() => {
    async function fetchFilteredNotes() {
      const allNotes = await getNotes();
      const filtered = activeTag ? allNotes.filter(note => note.tag === activeTag) : allNotes;
      setNotes(filtered);
    }
    fetchFilteredNotes();
  }, [activeTag]);

  const handleTagClick = (tag: string | null) => {
    setActiveTag(tag);
    router.push(tag ? `/notes/filter/${tag}` : `/notes/filter/all`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <SidebarNotes activeTag={activeTag} onTagClick={handleTagClick} />
      <div style={{ flex: 1, padding: '0 16px' }}>
        {notes.length === 0 ? (
          <p>No notes found.</p>
        ) : (
          notes.map(note => <NotePreview key={note.id} note={note} />)
        )}
      </div>
    </div>
  );
}