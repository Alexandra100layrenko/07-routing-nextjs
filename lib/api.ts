// lib/api.ts
import { Note } from '@/types/note';

let notes: Note[] = [
  { id: '1', title: 'Note 1', content: 'Content 1', tag: 'Work', createdAt: '2025-11-11', updatedAt: '2025-11-11' },
  { id: '2', title: 'Note 2', content: 'Content 2', tag: 'Personal', createdAt: '2025-11-10', updatedAt: '2025-11-10' },
];

export async function getNotes(): Promise<Note[]> {
  return new Promise((resolve) => setTimeout(() => resolve([...notes]), 300));
}

export async function getNoteById(id: string): Promise<Note | undefined> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(notes.find((n) => n.id === id)), 300)
  );
}

export async function deleteNote(id: string): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => {
      notes = notes.filter((n) => n.id !== id);
      resolve();
    }, 300)
  );
}

export async function createNote(note: Note): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => {
      notes.push(note);
      resolve();
    }, 300)
  );
}
