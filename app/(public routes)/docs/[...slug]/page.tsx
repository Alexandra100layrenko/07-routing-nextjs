// app/docs/[...slug]/page.tsx

interface DocsPageProps {
  readonly params: { slug?: string[] };
}

export default function DocsPage({ params }: DocsPageProps) {
  const slug = params.slug ?? [];
  return (
    <section style={{ padding: '24px' }}>
      <h1>Documentation</h1>
      <p>Current path: {slug.join('/') || 'docs'}</p>
    </section>
  );
}