// app/notes/[id]/page.tsx
import NotePreview from '@/components/NotePreview/NotePreview';
import { getNoteById } from '@/lib/api';

interface NotePageProps {
  readonly params: { id: string };
}

export default async function NotePage({ params }: NotePageProps) {
  const note = await getNoteById(params.id);
  if (!note) return <p>Note not found</p>;
  return <NotePreview note={note} />;
}