//app/notes/@modal/[id]/page.tsx
import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';
import { getNoteById } from '@/lib/api';

export default async function NoteModalPage({ params }: { params: { id: string }}) {
  const note = await getNoteById(params.id);
  if (!note) return <p>Note not found</p>;

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}