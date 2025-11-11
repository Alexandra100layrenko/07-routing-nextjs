//app/notes/@modal/[id]/page.tsx
import NotePreview from '@/components/NotePreview/NotePreview';
import { fetchNoteById } from '@/lib/api';

export default async function NoteModalPage({ params }: { params: { id: string } }) {
  const note = await fetchNoteById(params.id);
  return <NotePreview note={note} isModal />;
}
