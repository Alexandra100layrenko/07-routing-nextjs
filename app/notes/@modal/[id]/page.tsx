//app/notes/@modal/[id]/page.tsx
import NotePreview from '@/components/NotePreview/NotePreview';
import { getNoteById } from '@/lib/api';

interface NoteModalPageProps {
  readonly params: { id: string }; // readonly
}

export default async function NoteModalPage({ params }: NoteModalPageProps) {
  const note = await getNoteById(params.id);

  if (!note) {
    return <p>Note not found</p>;
  }

  return <NotePreview note={note} isModal />;
}