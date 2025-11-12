// app/notes/page.tsx
import NotesClient from '@/components/NotesClient/NotesClient';
import { getNotes } from '@/lib/api';

export default async function NotesPage() {
  const initialNotes = await getNotes(); 
  return <NotesClient initialNotes={initialNotes} initialTag={null} />;
}