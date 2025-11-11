// components/Modal/Modal.tsx
'use client';

import { useEffect, useState } from 'react';
import { getNoteById } from '@/lib/api';
import { Note } from '@/types/note';
import NotePreview from '@/components/NotePreview/NotePreview';
import css from './Modal.module.css';

interface ModalProps {
  noteId: string;
}

export default function Modal({ noteId }: ModalProps) {
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    async function fetchNote() {
      const n = await getNoteById(noteId);
      setNote(n ?? null);
    }
    fetchNote();
  }, [noteId]);

  if (!note) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <NotePreview note={note} />
      </div>
    </div>
  );
}