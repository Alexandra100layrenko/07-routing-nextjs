//app/notes/filter/[tag]/page.tsx
import NotesClient from '@/components/NotesClient/NotesClient';
import { getNotes } from '@/lib/api';

interface FilterPageProps {
  readonly params: { tag: string };
}

export default async function FilterNotesPage({ params }: FilterPageProps) {
  const tag = params.tag;
  const initialNotes = await getNotes();
  const filteredTag = tag === 'all' ? null : tag;

  return <NotesClient initialNotes={initialNotes} initialTag={filteredTag} />;
}