//app/notes/(list)/@modal/[id]/page.tsx
import NotePreview from '@/components/NotePreview/NotePreview';
import { getNoteById } from '@/lib/api';

interface NoteModalProps{
    readonly params: { id: string };
}

export default async function NoteModal({ params }: NoteModalProps) {
  const note = await getNoteById(params.id);

  if (!note) {
    return <p>Note not found</p>;
  }

  return <NotePreview note={note} />;
}