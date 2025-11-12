//components/SidebarNotes/SidebarNotes.tsx
'use client';

import css from './SidebarNotes.module.css';

interface SidebarNotesProps {
  readonly activeTag?: string | null;
  readonly onTagClick?: (tag: string | null) => void;
}

const tags = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function SidebarNotes({ activeTag, onTagClick }: SidebarNotesProps) {
  return (
    <div className={css.sidebarContent}>
      <h3>Tags</h3>
      <ul className={css.tagList}>
        {tags.map(tag => {
          const value = tag.toLowerCase();
          const isActive =
            (activeTag === null && value === 'all') ||
            activeTag?.toLowerCase() === value;

          return (
            <li key={tag}>
              <button
                className={isActive ? css.active : ''}
                onClick={() => onTagClick?.(value === 'all' ? null : value)}
              >
                {tag}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}