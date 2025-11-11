// app/profile/[id]/page.tsx
interface ProfileProps {
  readonly params: { id: string };
}

export default function ProfileDetail({ params }: ProfileProps) {
  return (
    <section style={{ padding: '24px' }}>
      <h1>Profile: {params.id}</h1>
      <p>Details for user ID {params.id}</p>
    </section>
  );
}
