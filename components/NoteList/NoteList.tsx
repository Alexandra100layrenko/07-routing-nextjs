//components/NoteList/NoteList.tsx
import { Note } from '@/types/note';
import NotePreview from '../NotePreview/NotePreview';
import css from './NoteList.module.css';

interface NoteListProps {
  readonly notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <ul className={css.listI}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <NotePreview note={note} />
        </li>
      ))}
    </ul>
  );
}