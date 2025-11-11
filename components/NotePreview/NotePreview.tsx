//components/NotePreview/NotePreview.tsx
'use client';

import { Note } from '@/types/note';
import css from './NotePreviev.module.css';

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2>{note.title}</h2>
        <span className={css.date}>{note.createdAt}</span>
      </div>
      <p className={css.content}>{note.content}</p>
      <span className={css.tag}>{note.tag}</span>
    </div>
  );
}
