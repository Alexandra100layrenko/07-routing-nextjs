// app/notes/page.tsx
import { getNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { Note } from '@/types/note';

export default async function NotesPage() {
  const notes: Note[] = await getNotes();
  return <NotesClient initialNotes={notes} />;
}
