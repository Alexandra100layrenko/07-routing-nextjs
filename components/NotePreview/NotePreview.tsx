//components/NotePreview/NotePreview.tsx
import { Note } from '@/types/note';

interface NotePreviewProps {
  note: Note;
  isModal?: boolean;
}

export default function NotePreview({ note, isModal }: NotePreviewProps) {
  return (
    <div style={{ border: isModal ? '2px solid blue' : '1px solid gray', padding: '12px' }}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <span>{note.tag}</span>
    </div>
  );
}