// app/notes/[id]/modal.tsx
import Modal from '@/components/Modal/Modal';

interface ModalPageProps {
  readonly params: { id: string };
}

export default function NoteModal({ params }: ModalPageProps) {
  return <Modal noteId={params.id} />;
}