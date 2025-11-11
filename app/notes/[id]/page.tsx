// app/notes/[id]/page.tsx
import { getNoteById } from '@/lib/api';
import NotePreview from '@/components/NotePreview/NotePreview';

interface NotePageProps {
  readonly params: { id: string };
}

export default async function NotePage({ params }: NotePageProps) {
  const note = await getNoteById(params.id);

  if (!note) return <p>Note not found</p>;

  return <NotePreview note={note} />;
}