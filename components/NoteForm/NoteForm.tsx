//components/NoteForm/NoteForm.tsx
import { useState } from 'react';
import css from './NoteForm.module.css';

interface NoteFormProps {
  readonly onCancel: () => void;
  readonly onSubmit?: (data: { title: string; content: string; tag: string }) => void;
}

export default function NoteForm({ onCancel, onSubmit }: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('Personal');

  return (
    <form className={css.form} onSubmit={(e) => {
      e.preventDefault();
      onSubmit?.({ title, content, tag });
    }}>
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className={css.input} />
      </div>
      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className={css.textarea} />
      </div>
      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <select id="tag" value={tag} onChange={(e) => setTag(e.target.value)} className={css.select}>
          <option>Todo</option>
          <option>Work</option>
          <option>Personal</option>
          <option>Meeting</option>
          <option>Shopping</option>
        </select>
      </div>
      <div className={css.actions}>
        <button type="submit" className={css.submitButton}>Save</button>
        <button type="button" onClick={onCancel} className={css.cancelButton}>Cancel</button>
      </div>
    </form>
  );
}
