//app/notes/filter/[tag]/page.tsx
import NotesClient from '../../Notes.client';

interface FilterPageProps {
  readonly params: { tag: string };
}

export default function NotesFilterPage({ params }: FilterPageProps) {
  const tag = params.tag === 'all' ? null : params.tag;
  return <NotesClient initialTag={tag} />;
}
