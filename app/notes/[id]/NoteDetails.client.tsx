// app/notes/[id]/NoteDetails.client.tsx
'use client';
import { getNoteById } from '@/lib/api';
import { Note } from '@/types/note';
import { useQuery } from '@tanstack/react-query';
import css from './NoteDetails.client.module.css';

type Props = { readonly initialNote: Note };

export default function NoteDetails({ initialNote }: Props) {
  const id = initialNote.id;

  const { data: note, isLoading, isError, error } = useQuery<Note, Error>({
    queryKey: ['note', id],
    queryFn: async () => {
      const n = await getNoteById(id);
      if (!n) throw new Error('Note not found');
      return n;
    },
    initialData: initialNote,
    refetchOnMount: false,
    enabled: !!id,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !note) return <p>{error?.message || 'Something went wrong'}</p>;

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