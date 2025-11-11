//app/notes/(list)/@modal/[id]/page.tsx
import NotePreview from '@/components/NotePreview/NotePreview';
import { fetchNoteById } from '@/lib/api';

export default async function NoteModal({ params }: { params: { id: string } }) {
  const note = await fetchNoteById(params.id);
  return <NotePreview note={note} />;
}
