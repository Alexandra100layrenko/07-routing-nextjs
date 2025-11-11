//app/notes/filter/[tag]/page.tsx
import { getNotes } from '@/lib/api';
import NotesClient from '../../Notes.client';

interface FilterPageProps {
  readonly params: { tag: string };
}

export default async function NotesFilterPage({ params }: FilterPageProps) {
  const tag = params.tag === 'all' ? null : params.tag;

  const notes = await getNotes();

  return <NotesClient initialNotes={notes} initialTag={tag} />;
}
