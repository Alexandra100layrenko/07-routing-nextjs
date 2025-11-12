//components/NotePreview/NotePreview.tsx
import { Note } from '@/types/note';
import css from './NotePreview.module.css';

interface Props {
  readonly note: Note;
}

export default function NotePreview({ note }: Props) {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2>{note.title}</h2>
        <span className={css.date}>{new Date(note.createdAt).toLocaleDateString()}</span>
      </div>
      <p className={css.content}>{note.content}</p>
      {note.tag && <span className={css.tag}>{note.tag}</span>}
    </div>
  );
}