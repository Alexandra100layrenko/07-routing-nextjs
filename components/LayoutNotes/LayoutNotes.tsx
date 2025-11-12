// components/LayoutNotes/LayoutNotes.tsx
'use client';

import React from 'react';
import SidebarNotes from '@/components/SidebarNotes/SidebarNotes';
import css from './LayoutNotes.module.css';

type Props = {
  readonly children: React.ReactNode;
  readonly sidebar?: React.ReactNode;
};

const LayoutNotes = ({ children, sidebar }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.sidebar}>
        {sidebar || <SidebarNotes />}
      </div>
      <div className={css.notesWrapper}>
        {children}
      </div>
    </div>
  );
};

export default LayoutNotes;